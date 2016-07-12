"use strict"


function getFullUrlPath(location) {
    var isHttps = location.protocol === 'https:';
    return location.protocol + '//' + location.hostname +
      ':' + (location.port || (isHttps ? '443' : '80')) +
      (/^\//.test(location.pathname) ? location.pathname : '/' + location.pathname);
};

function camelCase(name) {
    return name.replace(/([\:\-\_]+(.))/g, function(_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    });
};

function parseQueryString(keyValue) {
    var obj = {}, key, value;
    forEach((keyValue || '').split('&'), function(keyValue) {
      if (keyValue) {
        value = keyValue.split('=');
        key = decodeURIComponent(value[0]);
        obj[key] = isDefined(value[1]) ? decodeURIComponent(value[1]) : true;
      }
    });
    return obj;
};

function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
      return url;
    }

    var joined = [baseUrl, url].join('/');

    var normalize = function(str) {
      return str
        .replace(/[\/]+/g, '/')
        .replace(/\/\?/g, '?')
        .replace(/\/\#/g, '#')
        .replace(/\:\//g, '://');
    };

    return normalize(joined);
};

function merge(obj1, obj2) {
    var result = {};
    for (var i in obj1) {
      if (obj1.hasOwnProperty(i)) {
        if ((i in obj2) && (typeof obj1[i] === 'object') && (i !== null)) {
          result[i] = this.merge(obj1[i], obj2[i]);
        } else {
          result[i] = obj1[i];
        }
      }
    }
    for (i in obj2) {
      if (obj2.hasOwnProperty(i)) {
        if (i in result) {
          continue;
        }
        result[i] = obj2[i];
      }

    }
    return result;
};

function isObject(value) {
  // http://jsperf.com/isobject4
  return value !== null && typeof value === 'object';
}

function isString(value) {return typeof value === 'string';}


function extend(dst){
  return jQuery.extend(true, dst, arguments[1])
}

function isUndefined(value) {return typeof value === 'undefined';}
function isDefined(value) {return typeof value !== 'undefined';}
function isBlankObject(value) {
  return value !== null && typeof value === 'object' && !Object.getPrototypeOf(value);
}

function isFunction(value) {return typeof value === 'function';}

function forEach(obj, iterator, context) {
  
  jQuery.each(obj, function(key, value){
    iterator.call(context, value, key);
  });
}

module.exports = {
  getFullUrlPath : getFullUrlPath,
  camelCase : camelCase,
  parseQueryString : parseQueryString,
  joinUrl : joinUrl,
  merge : merge,
  isObject : isObject,
  isString : isString,
  forEach: forEach,
  extend : extend,
  isUndefined : isUndefined,

  isFunction : isFunction

}
