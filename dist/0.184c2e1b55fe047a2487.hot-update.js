webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("\n'use strict';\n\n/**\n * JavaScript Social\n * (c) 2016 Ibrahim Rashid\n * License: MIT\n */\n\nvar Auth = __webpack_require__(15);\nvar config = __webpack_require__(16);\nvar utils = __webpack_require__(18);\nvar extend = utils.extend;\nvar isDefined = utils.isDefined;\n\nvar jQueryHttpInterceptor = __webpack_require__(22).jQueryHttpInterceptor;\n\nif (!window.location.origin) {\n  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');\n}\n\nif (typeof jQuery == \"undefined\") {\n  throw Error('Please include jQuery/jQueryLite. This version of javascript social depends on jquery');\n}\n\nfunction JSSocial() {\n  return function (options) {\n    config = extend(config, options);\n\n    // Current Version is bind to jquery. Will remove jquery depnendency form next version.\n    jQueryHttpInterceptor.call();\n\n    return new Auth();\n  };\n}\n\nwindow.JSSocial = JSSocial();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2phdmFzY3JpcHQuc29jaWFsLmpzPzdiMTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSmF2YVNjcmlwdCBTb2NpYWxcbiAqIChjKSAyMDE2IElicmFoaW0gUmFzaGlkXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG52YXIgQXV0aCA9IHJlcXVpcmUoJy4vYXV0aC5qcycpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmpzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG52YXIgZXh0ZW5kID0gdXRpbHMuZXh0ZW5kO1xudmFyIGlzRGVmaW5lZCA9IHV0aWxzLmlzRGVmaW5lZDtcblxudmFyIGpRdWVyeUh0dHBJbnRlcmNlcHRvciA9IHJlcXVpcmUoJy4vaW50ZXJjZXB0b3JzJykualF1ZXJ5SHR0cEludGVyY2VwdG9yO1xuXG5cbmlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICgnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydCkgOiAnJyk7XG59XG5cbmlmKCB0eXBlb2YgalF1ZXJ5ID09IFwidW5kZWZpbmVkXCIgKXtcbiAgdGhyb3cgRXJyb3IoJ1BsZWFzZSBpbmNsdWRlIGpRdWVyeS9qUXVlcnlMaXRlLiBUaGlzIHZlcnNpb24gb2YgamF2YXNjcmlwdCBzb2NpYWwgZGVwZW5kcyBvbiBqcXVlcnknKTtcbn1cblxuZnVuY3Rpb24gSlNTb2NpYWwoKXtcbiAgICByZXR1cm4gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgICAgIGNvbmZpZyA9IGV4dGVuZChjb25maWcsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEN1cnJlbnQgVmVyc2lvbiBpcyBiaW5kIHRvIGpxdWVyeS4gV2lsbCByZW1vdmUganF1ZXJ5IGRlcG5lbmRlbmN5IGZvcm0gbmV4dCB2ZXJzaW9uLlxuICAgICAgICBqUXVlcnlIdHRwSW50ZXJjZXB0b3IuY2FsbCgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQXV0aCgpXG4gICAgfVxuIFxuXG59XG5cbndpbmRvdy5KU1NvY2lhbCA9IEpTU29jaWFsKClcblxuXG4gIFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2phdmFzY3JpcHQuc29jaWFsLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})