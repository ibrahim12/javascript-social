webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nvar _index = __webpack_require__(3);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(167);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(4);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(168);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(161);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  App: {\n    displayName: 'App'\n  }\n};\n\nvar _VolumesDataWorkGithubJavascriptSocialExamplesClientReactNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Volumes/Data/work/github/javascript-social/examples/client/react/src/app.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _VolumesDataWorkGithubJavascriptSocialExamplesClientReactNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Volumes/Data/work/github/javascript-social/examples/client/react/src/app.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _VolumesDataWorkGithubJavascriptSocialExamplesClientReactNode_modulesReactTransformHmrLibIndexJs2(_VolumesDataWorkGithubJavascriptSocialExamplesClientReactNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar App = _wrapComponent('App')(function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));\n  }\n\n  _createClass(App, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      JSSocial({\n        providers: {\n          google: {\n            clientId: '368579289805-r7q5crfule9j867b24rq0u41sel14lmu.apps.googleusercontent.com'\n          }\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { onClick: JSSocial.authenticate('google') },\n        ' Login With Google '\n      );\n    }\n  }]);\n\n  return App;\n}(_react3.default.Component));\n\n(0, _reactDom.render)(_react3.default.createElement(App, null), document.getElementById('reactapp'));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBKU1NvY2lhbCh7XG4gICAgICAgIHByb3ZpZGVyczoge1xuICAgICAgICAgICAgZ29vZ2xlOiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SWQgOiAnMzY4NTc5Mjg5ODA1LXI3cTVjcmZ1bGU5ajg2N2IyNHJxMHU0MXNlbDE0bG11LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9e0pTU29jaWFsLmF1dGhlbnRpY2F0ZSgnZ29vZ2xlJyl9PiBMb2dpbiBXaXRoIEdvb2dsZSA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3RhcHAnKSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYXBwLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBbkJBO0FBQ0E7QUFxQkE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
])