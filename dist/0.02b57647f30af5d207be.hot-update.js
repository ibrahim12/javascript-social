webpackHotUpdate(0,{

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	eval("//$q, $interval, $window, config, utils\n\nvar utils = __webpack_require__(18);\nvar extend = utils.extend;\nvar forEach = utils.forEach;\n\nfunction Popup() {\n\n  var Popup = {};\n\n  Popup.url = '';\n  Popup.popupWindow = null;\n\n  Popup.open = function (url, name, options) {\n    Popup.url = url;\n\n    var stringifiedOptions = Popup.stringifyOptions(Popup.prepareOptions(options));\n    var UA = $window.navigator.userAgent;\n    var windowName = window.cordova || UA.indexOf('CriOS') > -1 ? '_blank' : name;\n\n    Popup.popupWindow = window.open(url, windowName, stringifiedOptions);\n\n    window.popup = Popup.popupWindow;\n\n    if (Popup.popupWindow && Popup.popupWindow.focus) {\n      Popup.popupWindow.focus();\n    }\n\n    return Popup;\n  };\n\n  Popup.eventListener = function (redirectUri) {\n    var p1 = new Promise(function (resolve, reject) {\n      Popup.popupWindow.addEventListener('loadstart', function (event) {\n        if (event.url.indexOf(redirectUri) !== 0) {\n          return;\n        }\n\n        var parser = document.createElement('a');\n        parser.href = event.url;\n\n        if (parser.search || parser.hash) {\n          var queryParams = parser.search.substring(1).replace(/\\/$/, '');\n          var hashParams = parser.hash.substring(1).replace(/\\/$/, '');\n          var hash = utils.parseQueryString(hashParams);\n          var qs = utils.parseQueryString(queryParams);\n\n          extend(qs, hash);\n\n          if (!qs.error) {\n            resolve(qs);\n          }\n\n          Popup.popupWindow.close();\n        }\n      });\n\n      Popup.popupWindow.addEventListener('loaderror', function () {\n        reject('Authorization Failed');\n      });\n    });\n\n    return p1;\n  };\n\n  Popup.pollPopup = function (redirectUri) {\n\n    var promise = new Promise(function (resolve, reject) {\n\n      var redirectUriParser = document.createElement('a');\n      redirectUriParser.href = redirectUri;\n\n      var redirectUriPath = utils.getFullUrlPath(redirectUriParser);\n\n      var polling = setInterval(function () {\n        if (!Popup.popupWindow || Popup.popupWindow.closed || Popup.popupWindow.closed === undefined) {\n          reject('The popup window was closed.');\n          clearInterval(polling);\n        }\n\n        try {\n          var popupWindowPath = utils.getFullUrlPath(Popup.popupWindow.location);\n\n          // Redirect has occurred.\n          if (popupWindowPath === redirectUriPath) {\n            // Contains query/hash parameters as expected.\n            if (Popup.popupWindow.location.search || Popup.popupWindow.location.hash) {\n              var queryParams = Popup.popupWindow.location.search.substring(1).replace(/\\/$/, '');\n              var hashParams = Popup.popupWindow.location.hash.substring(1).replace(/[\\/$]/, '');\n              var hash = utils.parseQueryString(hashParams);\n              var qs = utils.parseQueryString(queryParams);\n\n              extend(qs, hash);\n\n              if (qs.error) {\n                reject(qs);\n              } else {\n                resolve(qs);\n              }\n            } else {\n              // Does not contain query/hash parameters, can't do anything at this point.\n              reject('Redirect has occurred but no query or hash parameters were found. ' + 'They were either not set during the redirect, or were removed before Satellizer ' + 'could read them, e.g. AngularJS routing mechanism.');\n            }\n\n            clearInterval(polling);\n            Popup.popupWindow.close();\n          }\n        } catch (error) {\n          // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.\n          // A hack to get around same-origin security policy errors in IE.\n        }\n      }, 20);\n    });\n\n    return promise;\n  };\n\n  Popup.prepareOptions = function (options) {\n    options = options || {};\n    var width = options.width || 500;\n    var height = options.height || 500;\n\n    return extend({\n      width: width,\n      height: height,\n      left: window.screenX + (window.outerWidth - width) / 2,\n      top: window.screenY + (window.outerHeight - height) / 2.5\n    }, options);\n  };\n\n  Popup.stringifyOptions = function (options) {\n    var parts = [];\n    forEach(options, function (value, key) {\n      parts.push(key + '=' + value);\n    });\n    return parts.join(',');\n  };\n\n  return Popup;\n}\n\nmodule.exports = Popup();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BvcHVwLmpzPzhlYmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8kcSwgJGludGVydmFsLCAkd2luZG93LCBjb25maWcsIHV0aWxzXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xudmFyIGV4dGVuZCA9IHV0aWxzLmV4dGVuZDtcbnZhciBmb3JFYWNoID0gdXRpbHMuZm9yRWFjaDtcblxuZnVuY3Rpb24gUG9wdXAoKXtcblxuICAgIHZhciBQb3B1cCA9IHt9O1xuXG4gICAgUG9wdXAudXJsID0gJyc7XG4gICAgUG9wdXAucG9wdXBXaW5kb3cgPSBudWxsO1xuXG4gICAgUG9wdXAub3BlbiA9IGZ1bmN0aW9uKHVybCwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgUG9wdXAudXJsID0gdXJsO1xuXG4gICAgICB2YXIgc3RyaW5naWZpZWRPcHRpb25zID0gUG9wdXAuc3RyaW5naWZ5T3B0aW9ucyhQb3B1cC5wcmVwYXJlT3B0aW9ucyhvcHRpb25zKSk7XG4gICAgICB2YXIgVUEgPSAkd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgICB2YXIgd2luZG93TmFtZSA9ICh3aW5kb3cuY29yZG92YSB8fCBVQS5pbmRleE9mKCdDcmlPUycpID4gLTEpID8gJ19ibGFuaycgOiBuYW1lO1xuXG4gICAgICBQb3B1cC5wb3B1cFdpbmRvdyA9IHdpbmRvdy5vcGVuKHVybCwgd2luZG93TmFtZSwgc3RyaW5naWZpZWRPcHRpb25zKTtcblxuICAgICAgd2luZG93LnBvcHVwID0gUG9wdXAucG9wdXBXaW5kb3c7XG5cbiAgICAgIGlmIChQb3B1cC5wb3B1cFdpbmRvdyAmJiBQb3B1cC5wb3B1cFdpbmRvdy5mb2N1cykge1xuICAgICAgICBQb3B1cC5wb3B1cFdpbmRvdy5mb2N1cygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUG9wdXA7XG4gICAgfTtcblxuICAgIFBvcHVwLmV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihyZWRpcmVjdFVyaSkge1xuICAgICAgdmFyIHAxID0gbmV3IFByb21pc2UoXG4gICAgICAgICAgZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgICAgIFBvcHVwLnBvcHVwV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZihyZWRpcmVjdFVyaSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgcGFyc2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICBwYXJzZXIuaHJlZiA9IGV2ZW50LnVybDtcblxuICAgICAgICAgICAgICBpZiAocGFyc2VyLnNlYXJjaCB8fCBwYXJzZXIuaGFzaCkge1xuICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IHBhcnNlci5zZWFyY2guc3Vic3RyaW5nKDEpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhhc2hQYXJhbXMgPSBwYXJzZXIuaGFzaC5zdWJzdHJpbmcoMSkucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHV0aWxzLnBhcnNlUXVlcnlTdHJpbmcoaGFzaFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgdmFyIHFzID0gdXRpbHMucGFyc2VRdWVyeVN0cmluZyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBleHRlbmQocXMsIGhhc2gpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFxcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUG9wdXAucG9wdXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFBvcHVwLnBvcHVwV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlcnJvcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZWplY3QoJ0F1dGhvcml6YXRpb24gRmFpbGVkJyk7XG4gICAgICAgICAgICB9KTsgXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHAxO1xuXG4gICAgfTtcblxuICAgIFBvcHVwLnBvbGxQb3B1cCA9IGZ1bmN0aW9uKHJlZGlyZWN0VXJpKSB7XG4gICAgICBcbiAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oIHJlc29sdmUsIHJlamVjdCl7XG5cbiAgICAgICAgICB2YXIgcmVkaXJlY3RVcmlQYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgcmVkaXJlY3RVcmlQYXJzZXIuaHJlZiA9IHJlZGlyZWN0VXJpO1xuXG4gICAgICAgICAgdmFyIHJlZGlyZWN0VXJpUGF0aCA9IHV0aWxzLmdldEZ1bGxVcmxQYXRoKHJlZGlyZWN0VXJpUGFyc2VyKTtcblxuICAgICAgICAgIHZhciBwb2xsaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIVBvcHVwLnBvcHVwV2luZG93IHx8IFBvcHVwLnBvcHVwV2luZG93LmNsb3NlZCB8fCBQb3B1cC5wb3B1cFdpbmRvdy5jbG9zZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZWplY3QoJ1RoZSBwb3B1cCB3aW5kb3cgd2FzIGNsb3NlZC4nKTtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIHBvcHVwV2luZG93UGF0aCA9IHV0aWxzLmdldEZ1bGxVcmxQYXRoKFBvcHVwLnBvcHVwV2luZG93LmxvY2F0aW9uKTtcblxuICAgICAgICAgICAgICAvLyBSZWRpcmVjdCBoYXMgb2NjdXJyZWQuXG4gICAgICAgICAgICAgIGlmIChwb3B1cFdpbmRvd1BhdGggPT09IHJlZGlyZWN0VXJpUGF0aCkge1xuICAgICAgICAgICAgICAgIC8vIENvbnRhaW5zIHF1ZXJ5L2hhc2ggcGFyYW1ldGVycyBhcyBleHBlY3RlZC5cbiAgICAgICAgICAgICAgICBpZiAoUG9wdXAucG9wdXBXaW5kb3cubG9jYXRpb24uc2VhcmNoIHx8IFBvcHVwLnBvcHVwV2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtcyA9IFBvcHVwLnBvcHVwV2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAgICAgICAgICAgICAgIHZhciBoYXNoUGFyYW1zID0gUG9wdXAucG9wdXBXaW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkucmVwbGFjZSgvW1xcLyRdLywgJycpO1xuICAgICAgICAgICAgICAgICAgdmFyIGhhc2ggPSB1dGlscy5wYXJzZVF1ZXJ5U3RyaW5nKGhhc2hQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgdmFyIHFzID0gdXRpbHMucGFyc2VRdWVyeVN0cmluZyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgIGV4dGVuZChxcywgaGFzaCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChxcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocXMpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxcyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIERvZXMgbm90IGNvbnRhaW4gcXVlcnkvaGFzaCBwYXJhbWV0ZXJzLCBjYW4ndCBkbyBhbnl0aGluZyBhdCB0aGlzIHBvaW50LlxuICAgICAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAnUmVkaXJlY3QgaGFzIG9jY3VycmVkIGJ1dCBubyBxdWVyeSBvciBoYXNoIHBhcmFtZXRlcnMgd2VyZSBmb3VuZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdUaGV5IHdlcmUgZWl0aGVyIG5vdCBzZXQgZHVyaW5nIHRoZSByZWRpcmVjdCwgb3Igd2VyZSByZW1vdmVkIGJlZm9yZSBTYXRlbGxpemVyICcgK1xuICAgICAgICAgICAgICAgICAgICAnY291bGQgcmVhZCB0aGVtLCBlLmcuIEFuZ3VsYXJKUyByb3V0aW5nIG1lY2hhbmlzbS4nXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbGluZyk7XG4gICAgICAgICAgICAgICAgUG9wdXAucG9wdXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gSWdub3JlIERPTUV4Y2VwdGlvbjogQmxvY2tlZCBhIGZyYW1lIHdpdGggb3JpZ2luIGZyb20gYWNjZXNzaW5nIGEgY3Jvc3Mtb3JpZ2luIGZyYW1lLlxuICAgICAgICAgICAgICAvLyBBIGhhY2sgdG8gZ2V0IGFyb3VuZCBzYW1lLW9yaWdpbiBzZWN1cml0eSBwb2xpY3kgZXJyb3JzIGluIElFLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwKTtcblxuXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIFBvcHVwLnByZXBhcmVPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDUwMDtcbiAgICAgIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCA1MDA7XG5cbiAgICAgIHJldHVybiBleHRlbmQoe1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBsZWZ0OiB3aW5kb3cuc2NyZWVuWCArICgod2luZG93Lm91dGVyV2lkdGggLSB3aWR0aCkgLyAyKSxcbiAgICAgICAgdG9wOiB3aW5kb3cuc2NyZWVuWSArICgod2luZG93Lm91dGVySGVpZ2h0IC0gaGVpZ2h0KSAvIDIuNSlcbiAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICBQb3B1cC5zdHJpbmdpZnlPcHRpb25zID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICBmb3JFYWNoKG9wdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcGFydHMucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcsJyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQb3B1cDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3BvcHVwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})