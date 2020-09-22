module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/launches.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./componets/layout/layout.styles.jsx":
/*!********************************************!*\
  !*** ./componets/layout/layout.styles.jsx ***!
  \********************************************/
/*! exports provided: Grid, GridItem, Title, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridItem\", function() { return GridItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst grey = '#979797';\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n`;\nconst GridItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  border: 1px solid ${grey};\n  padding: 1rem;\n  border-radius: 4px;\n  text-align: center;\n  position: relative;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  color: ${grey};\n  font-size: 36px;\n  text-align: center;\n  margin: 1rem;\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`\n  color: ${grey};\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25ldHMvbGF5b3V0L2xheW91dC5zdHlsZXMuanN4P2ZiNjUiXSwibmFtZXMiOlsiZ3JleSIsIkdyaWQiLCJzdHlsZWQiLCJkaXYiLCJHcmlkSXRlbSIsIlRpdGxlIiwiVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLElBQUksR0FBRyxTQUFiO0FBRU8sTUFBTUMsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7O0NBQXhCO0FBTUEsTUFBTUMsUUFBUSxHQUFHRix3REFBTSxDQUFDQyxHQUFJO3NCQUNiSCxJQUFLOzs7OztDQURwQjtBQVFBLE1BQU1LLEtBQUssR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBSTtXQUNyQkgsSUFBSzs7OztDQURUO0FBT0EsTUFBTU0sSUFBSSxHQUFHSix3REFBTSxDQUFDQyxHQUFJO1dBQ3BCSCxJQUFLO0NBRFQiLCJmaWxlIjoiLi9jb21wb25ldHMvbGF5b3V0L2xheW91dC5zdHlsZXMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdyZXkgPSAnIzk3OTc5Nyc7XG5cbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCAke2dyZXl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7Z3JleX07XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke2dyZXl9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componets/layout/layout.styles.jsx\n");

/***/ }),

/***/ "./pages/launches.js":
/*!***************************!*\
  !*** ./pages/launches.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _componets_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componets/layout/layout.styles */ \"./componets/layout/layout.styles.jsx\");\nvar _jsxFileName = \"/Users/alexgilbert/Desktop/spacex-update/client/pages/launches.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst LAUNCHES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"gql\"]`\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n`;\n\nconst Launches = () => {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])(LAUNCHES_QUERY);\n  if (loading) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  if (loading) return __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 23\n    }\n  }, \"Loading...\");\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(_componets_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"Launches\"), __jsx(_componets_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, data.launches.map(({\n    flight_number,\n    mission_name\n  }) => __jsx(_componets_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__[\"GridItem\"], {\n    key: flight_number,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_componets_layout_layout_styles__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, flight_number, \" : \", mission_name)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Launches);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXVuY2hlcy5qcz9hMGZiIl0sIm5hbWVzIjpbIkxBVU5DSEVTX1FVRVJZIiwiZ3FsIiwiTGF1bmNoZXMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidXNlUXVlcnkiLCJsYXVuY2hlcyIsIm1hcCIsImZsaWdodF9udW1iZXIiLCJtaXNzaW9uX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxrREFBSTs7Ozs7Ozs7O0NBQTNCOztBQVdBLE1BQU1DLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsK0RBQVEsQ0FBQ04sY0FBRCxDQUF6QztBQUVBLE1BQUlHLE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFDYixNQUFJQSxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRWIsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsSUFBSSxDQUFDRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsQ0FBQztBQUFFQyxpQkFBRjtBQUFpQkM7QUFBakIsR0FBRCxLQUNqQixNQUFDLHdFQUFEO0FBQVUsT0FBRyxFQUFFRCxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsYUFESCxTQUNxQkMsWUFEckIsQ0FERixDQURELENBREgsQ0FGRixDQURGO0FBY0QsQ0FwQkQ7O0FBc0JlUix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2xhdW5jaGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIFRpdGxlLCBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZXRzL2xheW91dC9sYXlvdXQuc3R5bGVzJztcblxuY29uc3QgTEFVTkNIRVNfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IExhdW5jaGVzUXVlcnkge1xuICAgIGxhdW5jaGVzIHtcbiAgICAgIGZsaWdodF9udW1iZXJcbiAgICAgIG1pc3Npb25fbmFtZVxuICAgICAgbGF1bmNoX2RhdGVfbG9jYWxcbiAgICAgIGxhdW5jaF9zdWNjZXNzXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBMYXVuY2hlcyA9ICgpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoTEFVTkNIRVNfUVVFUlkpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8VGl0bGU+TGF1bmNoZXM8L1RpdGxlPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIHtkYXRhLmxhdW5jaGVzLm1hcCgoeyBmbGlnaHRfbnVtYmVyLCBtaXNzaW9uX25hbWUgfSkgPT4gKFxuICAgICAgICAgIDxHcmlkSXRlbSBrZXk9e2ZsaWdodF9udW1iZXJ9PlxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIHtmbGlnaHRfbnVtYmVyfSA6IHttaXNzaW9uX25hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdW5jaGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/launches.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });