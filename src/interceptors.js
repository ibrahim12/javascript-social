//$q, config, storage, shared

var config = require('./config.js');
var shared = require('./shared.utils.js');
var storage = require('./storage.js');
var local = require('./auth.local.js');

function _getRequestAuthToken(request){

  if (request.skipAuthorization) {
    return false;
  }

  if (shared.isAuthenticated() && config.httpInterceptor(request)) {
    var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
    var token = storage.get(tokenName);

    if (config.authHeader && config.authToken) {
      token = config.authToken + ' ' + token;
    }

    return token;
  }

  return false;
}

function AngularHttpInterceptor(){
    return {
      request: function(request) {
        var token = _getRequestAuthToken(request);
        if( token ){
            request.headers[config.authHeader] = token;
        }

        return request;

      },
      responseError: function(response) {
        //return $q.reject(response);
      }
    };
}

function jQueryHttpInterceptor(){

  jQuery( document ).ajaxSend(function( event, jqxhr, settings ) {
      var token = _getRequestAuthToken(jqxhr);
      if( token ){
          jqxhr.setRequestHeader(config.authHeader, token)
      }
  });

}


module.exports = {
  AngularHttpInterceptor : AngularHttpInterceptor,
  jQueryHttpInterceptor : jQueryHttpInterceptor
}