
//$q, http, $window, $timeout, popup, utils, config, storage

var config = require('./config.js');
var http = require('./http.js');
var popup = require("./popup.js");
var storage = require("./storage.js");
var utils = require("./utils.js");

var extend = utils.extend;
var forEach = utils.forEach;
var isString = utils.isString;
var isFunction = utils.isFunction;
var merge = utils.merge;


function oAuth2(){
  
  return function() {
    var Oauth2 = {};

    var defaults = {
      defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
      responseType: 'code',
      responseParams: {
        code: 'code',
        clientId: 'clientId',
        redirectUri: 'redirectUri'
      }
    };

    Oauth2.open = function(options, userData) {
      defaults = merge(options, defaults);
      var promise = new Promise(function(resolve, reject){
          var url;
          var openPopup;
          var openPopupPromise;
          var stateName = defaults.name + '_state';

          if (utils.isFunction(defaults.state)) {
            storage.set(stateName, defaults.state());
          } else if (isString(defaults.state)) {
            storage.set(stateName, defaults.state);
          }

          url = [defaults.authorizationEndpoint, Oauth2.buildQueryString()].join('?');

          if (window.cordova) {
            openPopup = popup.open(url, defaults.name, defaults.popupOptions, defaults.redirectUri);
            openPopupPromise = openPopup.eventListener(defaults.redirectUri);
          } else {
            openPopup = popup.open(url, defaults.name, defaults.popupOptions, defaults.redirectUri);
            openPopupPromise = openPopup.pollPopup(defaults.redirectUri);
          }

          setTimeout(function () {
            openPopupPromise
              .then(function(oauthData) {
                // When no server URL provided, return popup params as-is.
                // This is for a scenario when someone wishes to opt out from
                // Satellizer's magic by doing authorization code exchange and
                // saving a token manually.
                if (defaults.responseType === 'token' || !defaults.url) {
                  return resolve(oauthData);
                }

                if (oauthData.state && oauthData.state !== storage.get(stateName)) {
                  return reject(
                    'The value returned in the state parameter does not match the state value from your original ' +
                    'authorization code request.'
                  );
                }

                resolve(Oauth2.exchangeForToken(oauthData, userData));
              }, function (err) {
                reject(err);
              });
          });

      });

      return promise;
    };

    Oauth2.exchangeForToken = function(oauthData, userData) {
      var data = extend({}, userData);

      forEach(defaults.responseParams, function(value, key) {
        switch (key) {
          case 'code':
            data[value] = oauthData.code;
            break;
          case 'clientId':
            data[value] = defaults.clientId;
            break;
          case 'redirectUri':
            data[value] = defaults.redirectUri;
            break;
          default:
            data[value] = oauthData[key];
        }
      });

      if (oauthData.state) {
        data.state = oauthData.state;
      }

      var exchangeForTokenUrl = config.baseUrl ? utils.joinUrl(config.baseUrl, defaults.url) : defaults.url;

      return http.post(exchangeForTokenUrl, data, { withCredentials: config.withCredentials });
    };

    Oauth2.buildQueryString = function() {
      var keyValuePairs = [];
      var urlParamsCategories = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];

      forEach(urlParamsCategories, function(paramsCategory) {
        forEach(defaults[paramsCategory], function(paramName) {
          var camelizedName = utils.camelCase(paramName);
          var paramValue = isFunction(defaults[paramName]) ? defaults[paramName]() : defaults[camelizedName];

          if (paramName === 'redirect_uri' && !paramValue) {
              return;
          }

          if (paramName === 'state') {
            var stateName = defaults.name + '_state';
            paramValue = storage.get(stateName);
          }

          if (paramName === 'scope' && Array.isArray(paramValue)) {
            paramValue = paramValue.join(defaults.scopeDelimiter);

            if (defaults.scopePrefix) {
              paramValue = [defaults.scopePrefix, paramValue].join(defaults.scopeDelimiter);
            }
          }

          keyValuePairs.push([paramName, encodeURIComponent(paramValue)]);
        });
      });

      return keyValuePairs.map(function(pair) {
        return pair.join('=');
      }).join('&');
    };

    return Oauth2;
  };
}

module.exports = oAuth2();