//$q, $http, popup, config, utils

var config = require('./config.js');
var http = require('./http.js');
var popup = require("./popup.js");
var utils = require("./utils.js");

var extend = utils.extend;
var forEach = utils.forEach;
var merge = utils.merge;

function oAuth1(){

  return function() {
    var Oauth1 = {};

    var defaults = {
      url: null,
      name: null,
      popupOptions: null,
      redirectUri: null,
      authorizationEndpoint: null
    };

    Oauth1.open = function(options, userData) {
      extend(defaults, options);
      var popupWindow;
      var serverUrl = config.baseUrl ? utils.joinUrl(config.baseUrl, defaults.url) : defaults.url;

      if (!window.cordova) {
          popupWindow = popup.open('', defaults.name, defaults.popupOptions, defaults.redirectUri);
      }

      return http.post(serverUrl, defaults)
        .then(function(response) {
          var url = [defaults.authorizationEndpoint, Oauth1.buildQueryString(response.data)].join('?');

          if (window.cordova) {
            popupWindow = popup.open(url, defaults.name, defaults.popupOptions, defaults.redirectUri);
          } else {
            popupWindow.popupWindow.location = url;
          }

          var popupListener;

          if (window.cordova) {
            popupListener = popupWindow.eventListener(defaults.redirectUri);
          } else {
            popupListener = popupWindow.pollPopup(defaults.redirectUri);
          }

          return popupListener
            .then(function(response) {
              return Oauth1.exchangeForToken(response, userData);
            });
        });

    };

    Oauth1.exchangeForToken = function(oauthData, userData) {
      var data = extend({}, userData, oauthData);
      var exchangeForTokenUrl = config.baseUrl ? utils.joinUrl(config.baseUrl, defaults.url) : defaults.url;
      return http.post(exchangeForTokenUrl, data, { withCredentials: config.withCredentials });
    };

    Oauth1.buildQueryString = function(obj) {
      var str = [];

      forEach(obj, function(value, key) {
        str.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      });

      return str.join('&');
    };

    return Oauth1;
  };

}

module.exports = oAuth1();