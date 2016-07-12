//$http, utils, shared, config
var http = require('./http.js');
var shared = require('./shared.utils.js');
var utils = require("./utils.js");
var config = require("./config.js");

function AuthLocal(){

    var Local = {};

    Local.login = function(user, opts) {
      opts = opts || {};
      opts.url = opts.url ? opts.url : utils.joinUrl(config.baseUrl, config.loginUrl);
      opts.data = user || opts.data;
      opts.method = opts.method || 'POST';
      opts.withCredentials = opts.withCredentials || config.withCredentials;

      return http.ajax(opts).then(function(response) {
        shared.setToken(response);
        return response;
      });
    };

    Local.signup = function(user, opts) {
      opts = opts || {};
      opts.url = opts.url ? opts.url : utils.joinUrl(config.baseUrl, config.signupUrl);
      opts.data = user || opts.data;
      opts.method = opts.method || 'POST';
      opts.withCredentials = opts.withCredentials || config.withCredentials;

      return http.ajax(opts);
    };

    return Local;

}

module.exports = AuthLocal();