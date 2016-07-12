'use strict';

/**
 * JavaScript Social
 * (c) 2016 Ibrahim Rashid
 * License: MIT
 */

var Auth = require('./auth.js');
var config = require('./config.js');
var utils = require('./utils.js');
var extend = utils.extend;

var jQueryHttpInterceptor = require('./interceptors');


if (!window.location.origin) {
  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
}

if( !isDefined(jQuery) ){
  console.alert('Please include jQuery/jQueryLite. This version of javascript social depends on jquery');
  return;
}

function JSSocial(options){

  config = extend(config, options);

  // Current Version is bind to jquery. Will remove jquery depnendency form next version.
  jQueryHttpInterceptor.call();

  return new Auth()

}


module.exports = JSSocial();



  
