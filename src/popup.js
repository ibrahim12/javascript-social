//$q, $interval, $window, config, utils

var utils = require("./utils.js");
var extend = utils.extend;
var forEach = utils.forEach;

function Popup(){

    var Popup = {};

    Popup.url = '';
    Popup.popupWindow = null;

    Popup.open = function(url, name, options) {
      Popup.url = url;

      var stringifiedOptions = Popup.stringifyOptions(Popup.prepareOptions(options));
      var UA = $window.navigator.userAgent;
      var windowName = (window.cordova || UA.indexOf('CriOS') > -1) ? '_blank' : name;

      Popup.popupWindow = $window.open(url, windowName, stringifiedOptions);

      $window.popup = Popup.popupWindow;

      if (Popup.popupWindow && Popup.popupWindow.focus) {
        Popup.popupWindow.focus();
      }

      return Popup;
    };

    Popup.eventListener = function(redirectUri) {
      var p1 = new Promise(){
          function(resolve, reject){
            Popup.popupWindow.addEventListener('loadstart', function(event) {
              if (event.url.indexOf(redirectUri) !== 0) {
                return;
              }

              var parser = document.createElement('a');
              parser.href = event.url;

              if (parser.search || parser.hash) {
                var queryParams = parser.search.substring(1).replace(/\/$/, '');
                var hashParams = parser.hash.substring(1).replace(/\/$/, '');
                var hash = utils.parseQueryString(hashParams);
                var qs = utils.parseQueryString(queryParams);

                extend(qs, hash);

                if (!qs.error) {
                  resolve(qs);
                }

                Popup.popupWindow.close();
              }
            });

            Popup.popupWindow.addEventListener('loaderror', function() {
              reject('Authorization Failed');
            });
          }
      }

      return p1;

    };

    Popup.pollPopup = function(redirectUri) {
      
      var promise = new Promise(function( resolve, reject){

          var redirectUriParser = document.createElement('a');
          redirectUriParser.href = redirectUri;

          var redirectUriPath = utils.getFullUrlPath(redirectUriParser);

          var polling = setInterval(function() {
            if (!Popup.popupWindow || Popup.popupWindow.closed || Popup.popupWindow.closed === undefined) {
              reject('The popup window was closed.');
              clearInterval(polling);
            }

            try {
              var popupWindowPath = utils.getFullUrlPath(Popup.popupWindow.location);

              // Redirect has occurred.
              if (popupWindowPath === redirectUriPath) {
                // Contains query/hash parameters as expected.
                if (Popup.popupWindow.location.search || Popup.popupWindow.location.hash) {
                  var queryParams = Popup.popupWindow.location.search.substring(1).replace(/\/$/, '');
                  var hashParams = Popup.popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
                  var hash = utils.parseQueryString(hashParams);
                  var qs = utils.parseQueryString(queryParams);

                  extend(qs, hash);

                  if (qs.error) {
                    reject(qs);
                  } else {
                    resolve(qs);
                  }
                } else {
                  // Does not contain query/hash parameters, can't do anything at this point.
                  reject(
                    'Redirect has occurred but no query or hash parameters were found. ' +
                    'They were either not set during the redirect, or were removed before Satellizer ' +
                    'could read them, e.g. AngularJS routing mechanism.'
                  );
                }

                clearInterval(polling);
                Popup.popupWindow.close();
              }
            } catch (error) {
              // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
              // A hack to get around same-origin security policy errors in IE.
            }
          }, 20);


      });

      return promise;
    };

    Popup.prepareOptions = function(options) {
      options = options || {};
      var width = options.width || 500;
      var height = options.height || 500;

      return extend({
        width: width,
        height: height,
        left: window.screenX + ((window.outerWidth - width) / 2),
        top: window.screenY + ((window.outerHeight - height) / 2.5)
      }, options);
    };

    Popup.stringifyOptions = function(options) {
      var parts = [];
      forEach(options, function(value, key) {
        parts.push(key + '=' + value);
      });
      return parts.join(',');
    };

    return Popup;
}


module.exports = Popup();