"use strict";
(this["webpackChunkreact_typescript_webpack_starter"] = this["webpackChunkreact_typescript_webpack_starter"] || []).push([["main"],{

/***/ 547:
/*!************************!*\
  !*** ./client/App.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Counter */ 506);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ 893);




var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      children: "Reac Webpack Starter Template"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Counter__WEBPACK_IMPORTED_MODULE_0__.Counter, {})]
  });
};

/***/ }),

/***/ 506:
/*!****************************!*\
  !*** ./client/Counter.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Counter": () => (/* binding */ Counter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 893);




var Counter = function Counter() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      children: "Update the count and edit src/App.tsx, state is preserved"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      onClick: function onClick() {
        return setCount(function (c) {
          return c + 1;
        });
      },
      children: ["Count - ", count]
    })]
  });
};

/***/ }),

/***/ 330:
/*!**************************!*\
  !*** ./client/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ 935);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ 547);
/* harmony import */ var _inded_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inded.scss */ 36);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 893);




react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_1__.App, {}), document.getElementById('root'));

/***/ }),

/***/ 36:
/*!***************************!*\
  !*** ./client/inded.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(330)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map