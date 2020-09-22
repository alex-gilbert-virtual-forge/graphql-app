webpackHotUpdate_N_E("pages/launches",{

/***/ "./pages/launches.js":
/*!***************************!*\
  !*** ./pages/launches.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _componets_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componets/layout */ \"./componets/layout.jsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alexgilbert/Desktop/spacex-update/client/pages/launches.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query LaunchesQuery {\\n    launches {\\n      flight_number\\n      mission_name\\n      launch_date_local\\n      launch_success\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar LAUNCHES_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"gql\"])(_templateObject());\n\nvar Launches = function Launches() {\n  _s();\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(LAUNCHES_QUERY),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (error) return __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 21\n    }\n  }, \"Error :(\");\n  return __jsx(_componets_layout__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, data.launches.map(function (_ref) {\n    var flight_number = _ref.flight_number,\n        mission_name = _ref.mission_name;\n    return __jsx(\"div\", {\n      key: flight_number,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }\n    }, __jsx(_componets_layout__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, flight_number, \" : \", mission_name));\n  }));\n};\n\n_s(Launches, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Launches;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Launches);\n\nvar _c;\n\n$RefreshReg$(_c, \"Launches\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGF1bmNoZXMuanM/YTBmYiJdLCJuYW1lcyI6WyJMQVVOQ0hFU19RVUVSWSIsImdxbCIsIkxhdW5jaGVzIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibGF1bmNoZXMiLCJtYXAiLCJmbGlnaHRfbnVtYmVyIiwibWlzc2lvbl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLDBEQUFILG1CQUFwQjs7QUFXQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLCtEQUFRLENBQUNILGNBQUQsQ0FEcEI7QUFBQSxNQUNiSSxPQURhLGFBQ2JBLE9BRGE7QUFBQSxNQUNKQyxLQURJLGFBQ0pBLEtBREk7QUFBQSxNQUNHQyxJQURILGFBQ0dBLElBREg7O0FBR3JCLE1BQUlGLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBRVgsU0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxDQUFDQyxRQUFMLENBQWNDLEdBQWQsQ0FBa0I7QUFBQSxRQUFHQyxhQUFILFFBQUdBLGFBQUg7QUFBQSxRQUFrQkMsWUFBbEIsUUFBa0JBLFlBQWxCO0FBQUEsV0FDakI7QUFBSyxTQUFHLEVBQUVELGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQSxhQURILFNBQ3FCQyxZQURyQixDQURGLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQURGO0FBV0QsQ0FqQkQ7O0dBQU1SLFE7VUFDNkJDLHVEOzs7S0FEN0JELFE7QUFtQlNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGF1bmNoZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIFRleHQgfSBmcm9tICcuLi9jb21wb25ldHMvbGF5b3V0JztcblxuY29uc3QgTEFVTkNIRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IExhdW5jaGVzUXVlcnkge1xuICAgIGxhdW5jaGVzIHtcbiAgICAgIGZsaWdodF9udW1iZXJcbiAgICAgIG1pc3Npb25fbmFtZVxuICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcbiAgICAgIGxhdW5jaF9zdWNjZXNzXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBMYXVuY2hlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTEFVTkNIRVNfUVVFUlkpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yIDooPC9wPjtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAge2RhdGEubGF1bmNoZXMubWFwKCh7IGZsaWdodF9udW1iZXIsIG1pc3Npb25fbmFtZSB9KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtmbGlnaHRfbnVtYmVyfT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIHtmbGlnaHRfbnVtYmVyfSA6IHttaXNzaW9uX25hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvR3JpZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/launches.js\n");

/***/ })

})