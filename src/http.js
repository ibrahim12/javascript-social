var utils = require("./utils.js");
var isDefined = utils.isDefined;

function Http(){

    var http = {};

    http.post = function(url, data, headers){
        return jQuery.post(url, data, headers);
    };

    http.get = function(url, data, headers){
        return jQuery.get(url, data, headers);
    };

    http.ajax = function(options){
        if( options.withCredentials ){
            options['xhrFields']['withCredentials'] = options.withCredentials;
        }
        return jQuery.ajax(options);
    };

    return http;

}

module.exports = Http();