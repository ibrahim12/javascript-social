webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("\n'use strict';\n\n/**\n * JavaScript Social\n * (c) 2016 Ibrahim Rashid\n * License: MIT\n */\n\nvar Auth = __webpack_require__(15);\nvar config = __webpack_require__(16);\nvar utils = __webpack_require__(18);\nvar extend = utils.extend;\nvar isDefined = utils.isDefined;\n\nvar jQueryHttpInterceptor = __webpack_require__(22);\n\nif (!window.location.origin) {\n  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');\n}\n\nif (typeof jQuery == \"undefined\") {\n  throw Error('Please include jQuery/jQueryLite. This version of javascript social depends on jquery');\n}\n\nfunction JSSocial(options) {\n\n  config = extend(config, options);\n\n  // Current Version is bind to jquery. Will remove jquery depnendency form next version.\n  jQueryHttpInterceptor.call();\n\n  return new Auth();\n}\n\nmodule.exports = JSSocial();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2phdmFzY3JpcHQuc29jaWFsLmpzPzdiMTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBTb2NpYWxcbiAqIChjKSAyMDE2IElicmFoaW0gUmFzaGlkXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG52YXIgQXV0aCA9IHJlcXVpcmUoJy4vYXV0aC5qcycpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG52YXIgZXh0ZW5kID0gdXRpbHMuZXh0ZW5kO1xudmFyIGlzRGVmaW5lZCA9IHV0aWxzLmlzRGVmaW5lZDtcblxudmFyIGpRdWVyeUh0dHBJbnRlcmNlcHRvciA9IHJlcXVpcmUoJy4vaW50ZXJjZXB0b3JzJyk7XG5cblxuaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gKCc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0KSA6ICcnKTtcbn1cblxuaWYoIHR5cGVvZiBqUXVlcnkgPT0gXCJ1bmRlZmluZWRcIiApe1xuICB0aHJvdyBFcnJvcignUGxlYXNlIGluY2x1ZGUgalF1ZXJ5L2pRdWVyeUxpdGUuIFRoaXMgdmVyc2lvbiBvZiBqYXZhc2NyaXB0IHNvY2lhbCBkZXBlbmRzIG9uIGpxdWVyeScpO1xufVxuXG5mdW5jdGlvbiBKU1NvY2lhbChvcHRpb25zKXtcblxuICBjb25maWcgPSBleHRlbmQoY29uZmlnLCBvcHRpb25zKTtcblxuICAvLyBDdXJyZW50IFZlcnNpb24gaXMgYmluZCB0byBqcXVlcnkuIFdpbGwgcmVtb3ZlIGpxdWVyeSBkZXBuZW5kZW5jeSBmb3JtIG5leHQgdmVyc2lvbi5cbiAgalF1ZXJ5SHR0cEludGVyY2VwdG9yLmNhbGwoKTtcblxuICByZXR1cm4gbmV3IEF1dGgoKVxuXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBKU1NvY2lhbCgpO1xuXG5cblxuICBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9qYXZhc2NyaXB0LnNvY2lhbC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})