//$q, $http, config, utils, shared, Oauth1, Oauth2

var config = require('./config.js');
var http = require('./http.js');
var Oauth1 = require('./oauth1.js');
var Oauth2 = require('./oauth2.js');


function oAuth(){
  var Oauth = {};

  Oauth.authenticate = function(name, userData) {
    var provider = config.providers[name].oauthType === '1.0' ? new Oauth1() : new Oauth2();
    var promise = new Promise(resolve, reject){

      provider.open(config.providers[name], userData || {})
        .then(function(response) {
          // This is for a scenario when someone wishes to opt out from
          // Satellizer's magic by doing authorization code exchange and
          // saving a token manually.
          if (config.providers[name].url) {
            shared.setToken(response, false);
          }
          resolve(response);
        })
        .catch(function(error) {
          reject(error);
        });

    }
    
    return promise;
  };

  Oauth.unlink = function(provider, opts) {
    opts = opts || {};
    opts.url = opts.url ? opts.url : utils.joinUrl(config.baseUrl, config.unlinkUrl);
    opts.data = { provider: provider } || opts.data;
    opts.method = opts.method || 'POST';
    opts.withCredentials = opts.withCredentials || config.withCredentials;

    return http(opts);
  };

  return Oauth;
}


module.exports = oAuth();
