
var config = require('./config.js');
var shared = require('./shared.utils.js');
var local = require('./auth.local.js');

function Auth(){

    Object.defineProperties(this, {
        httpInterceptor: {
          get: function() { return config.httpInterceptor; },
          set: function(value) {
            if (typeof value === 'function') {
              config.httpInterceptor = value;
            } else {
              config.httpInterceptor = function() {
                return value;
              };
            }
          }
        },
        baseUrl: {
          get: function() { return config.baseUrl; },
          set: function(value) { config.baseUrl = value; }
        },
        loginUrl: {
          get: function() { return config.loginUrl; },
          set: function(value) { config.loginUrl = value; }
        },
        signupUrl: {
          get: function() { return config.signupUrl; },
          set: function(value) { config.signupUrl = value; }
        },
        tokenRoot: {
          get: function() { return config.tokenRoot; },
          set: function(value) { config.tokenRoot = value; }
        },
        tokenName: {
          get: function() { return config.tokenName; },
          set: function(value) { config.tokenName = value; }
        },
        tokenPrefix: {
          get: function() { return config.tokenPrefix; },
          set: function(value) { config.tokenPrefix = value; }
        },
        unlinkUrl: {
          get: function() { return config.unlinkUrl; },
          set: function(value) { config.unlinkUrl = value; }
        },
        authHeader: {
          get: function() { return config.authHeader; },
          set: function(value) { config.authHeader = value; }
        },
        authToken: {
          get: function() { return config.authToken; },
          set: function(value) { config.authToken = value; }
        },
        withCredentials: {
          get: function() { return config.withCredentials; },
          set: function(value) { config.withCredentials = value; }
        },
        storageType: {
          get: function() { return config.storageType; },
          set: function(value) { config.storageType = value; }
        }
    });

    angular.forEach(Object.keys(config.providers), function(provider) {
        this[provider] = function(params) {
          return angular.extend(config.providers[provider], params);
        };
    }, this);

    var oauth = function(params) {
        config.providers[params.name] = config.providers[params.name] || {};
        angular.extend(config.providers[params.name], params);
    };

    this.oauth1 = function(params) {
        oauth(params);
        config.providers[params.name].oauthType = '1.0';
    };

    this.oauth2 = function(params) {
        oauth(params);
        config.providers[params.name].oauthType = '2.0';
    };

    var _auth = {};

    _auth.login = function(user, opts) {
        return local.login(user, opts);
    };

    _auth.signup = function(user, options) {
        return local.signup(user, options);
    };

    _auth.logout = function() {
        return shared.logout();
    };

    _auth.authenticate = function(name, userData) {
        return oauth.authenticate(name, userData);
    };

    _auth.link = function(name, userData) {
        return oauth.authenticate(name, userData);
    };

    _auth.unlink = function(provider, opts) {
        return oauth.unlink(provider, opts);
    };

    _auth.isAuthenticated = function() {
        return shared.isAuthenticated();
    };

    _auth.getToken = function() {
        return shared.getToken();
    };

    _auth.setToken = function(token) {
        shared.setToken({ access_token: token });
    };

    _auth.removeToken = function() {
        return shared.removeToken();
    };

    _auth.getPayload = function() {
        return shared.getPayload();
    };

    _auth.setStorageType = function(type) {
        return shared.setStorageType(type);
    };

    return _auth;

}


module.exports = Auth;
