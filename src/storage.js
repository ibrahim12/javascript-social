"use strict"

var config = require('./config.js');

function Storage(){

  var store = {};

  // Check if localStorage or sessionStorage is available or enabled
  var isStorageAvailable = (function() {
    try {
      var supported = config.storageType in window && window[config.storageType] !== null;

      if (supported) {
        var key = Math.random().toString(36).substring(7);
        window[config.storageType].setItem(key, '');
        window[config.storageType].removeItem(key);
      }

      return supported;
    } catch (e) {
      return false;
    }
  })();

  if (!isStorageAvailable) {
    console.warn(config.storageType + ' is not available.');
  }

  return {
    get: function(key) {
      return isStorageAvailable ? window[config.storageType].getItem(key) : store[key];
    },
    set: function(key, value) {
      return isStorageAvailable ? window[config.storageType].setItem(key, value) : store[key] = value;
    },
    remove: function(key) {
      return isStorageAvailable ? window[config.storageType].removeItem(key): delete store[key];
    }
  };

}

module.exports = Storage();