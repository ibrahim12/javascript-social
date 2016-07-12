var config = require('./config.js');
var utils = require('./utils.js');
var storage = require('./storage.js');
var isObject = utils.isObject;
var isString = utils.isString;

function SharedUtil(){

  var Shared = {};

  var tokenName = config.tokenPrefix ? [config.tokenPrefix, config.tokenName].join('_') : config.tokenName;

  Shared.getToken = function() {
    return storage.get(tokenName);
  };

  Shared.getPayload = function() {
    var token = storage.get(tokenName);

    if (token && token.split('.').length === 3) {
      try {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
      } catch(e) {
        return undefined;
      }
    }
  };

  Shared.setToken = function(response) {
    if (!response) {
      return console.warn('Can\'t set token without passing a value');
    }

    var accessToken = response && ( response.access_token || response.token );
    var token;

    if (accessToken) {
      if (isObject(accessToken) && isObject(accessToken.data)) {
        response = accessToken;
      } else if (isString(accessToken)) {
        token = accessToken;
      }
    }

    if (!token && response) {
      var tokenRootData = config.tokenRoot && config.tokenRoot.split('.').reduce(function(o, x) { return o[x]; }, response.data);
      token = tokenRootData ? tokenRootData[config.tokenName] : response.data && response.data[config.tokenName];
    }

    if (!token) {
      var tokenPath = config.tokenRoot ? config.tokenRoot + '.' + config.tokenName : config.tokenName;
      return console.warn('Expecting a token named "' + tokenPath);
    }

    storage.set(tokenName, token);
  };

  Shared.removeToken = function() {
    storage.remove(tokenName);
  };

  /**
   * @returns {boolean}
   */
  Shared.isAuthenticated = function() {
    var token = storage.get(tokenName);
    // A token is present
    if (token) {
      // Token with a valid JWT format XXX.YYY.ZZZ
      if (token.split('.').length === 3) {
        // Could be a valid JWT or an access token with the same format
        try {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var exp = JSON.parse(window.atob(base64)).exp;
          // JWT with an optonal expiration claims
          if (exp) {
            var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
            if (isExpired) {
              // FAIL: Expired token
              return false;
            } else {
              // PASS: Non-expired token
              return true;
            }
          }
        } catch(e) {
          // PASS: Non-JWT token that looks like JWT
          return true;
        }
      }
      // PASS: All other tokens
      return true;
    }
    // FAIL: No token at all
    return false;
  };

  Shared.logout = function() {
    storage.remove(tokenName);
    //return $q.when();
  };

  Shared.setStorageType = function(type) {
    config.storageType = type;
  };

  return Shared;

}


module.exports = SharedUtil();
