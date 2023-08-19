/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Mode.js":
/*!************************!*\
  !*** ./src/js/Mode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mode: () => (/* binding */ Mode)\n/* harmony export */ });\n/* harmony import */ var _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementsHTML.js */ \"./src/js/elementsHTML.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar main = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.main,\n  modeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.modeBtn,\n  lightModeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.lightModeBtn,\n  darkModeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.darkModeBtn,\n  minutes = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.minutes,\n  seconds = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.seconds,\n  allControllers = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.allControllers,\n  cardsGroup = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.cardsGroup,\n  slideVolumeGroup = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.slideVolumeGroup;\n\n// classe da logica do modo ligth/dark\nvar Mode = /*#__PURE__*/_createClass(function Mode() {\n  _classCallCheck(this, Mode);\n  modeBtn.onclick = function () {\n    // logica do icone de ligth/dark\n    lightModeBtn.classList.toggle(\"hidden\");\n    darkModeBtn.classList.toggle(\"hidden\");\n\n    // logica da versao dark mode do timer\n    main.classList.toggle(\"backgroundDark\");\n    minutes.classList.toggle(\"darkmode-defaultColor\");\n    seconds.classList.toggle(\"darkmode-defaultColor\");\n\n    // logica da versao dark mode dos icones dos controles do timer\n    allControllers.classList.toggle(\"darkmode-defaultColor-Btns\");\n\n    // logica da versao dark mode dos cards(backgroud e icones)\n    cardsGroup.forEach(function (card) {\n      card.classList.toggle(\"darkmode-defaultColor-Cards\");\n      card.classList.toggle(\"darkmode-defaultColor-Cards-svg\");\n    });\n\n    // logica da versao dark mode do slide\n    slideVolumeGroup.forEach(function (slide) {\n      if (!darkModeBtn.classList.contains(\"hidden\")) {\n        slide.classList.remove(\"slide-volume\");\n        slide.classList.add(\"slide-volume-darkMode\");\n      }\n      if (darkModeBtn.classList.contains(\"hidden\")) {\n        slide.classList.add(\"slide-volume\");\n        slide.classList.remove(\"slide-volume-darkMode\");\n      }\n    });\n  };\n});\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/Mode.js?");

/***/ }),

/***/ "./src/js/Timer.js":
/*!*************************!*\
  !*** ./src/js/Timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controlls: () => (/* binding */ Controlls),\n/* harmony export */   Timer: () => (/* binding */ Timer)\n/* harmony export */ });\n/* harmony import */ var _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementsHTML.js */ \"./src/js/elementsHTML.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// Logica dos botoes de controle do Timer\n\nvar _playAndpause = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.playAndpause,\n  playBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.playBtn,\n  pauseBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.pauseBtn,\n  stopBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.stopBtn;\n\n// Logica dos controles do timer\nvar Controlls = /*#__PURE__*/function () {\n  function Controlls() {\n    _classCallCheck(this, Controlls);\n    this.playAndpause();\n    this.stop();\n  }\n\n  //   metodo que alterna o botao play/pause\n  _createClass(Controlls, [{\n    key: \"playAndpause\",\n    value: function playAndpause() {\n      var _this = this;\n      _playAndpause.onclick = function () {\n        playBtn.classList.toggle(\"hidden\");\n        _this.play();\n        pauseBtn.classList.toggle(\"hidden\");\n      };\n    }\n\n    //   metodo que da play no timer\n  }, {\n    key: \"play\",\n    value: function play() {\n      if (playBtn.classList.contains(\"hidden\")) {\n        return console.log(\"contador play teste\");\n      }\n      if (!playBtn.classList.contains(\"hidden\")) {\n        return console.log(\"contador pause teste\");\n      }\n    }\n\n    //   metodos que aciona o stop do timer\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      stopBtn.onclick = function () {\n        if (!playBtn.classList.contains(\"hidden\")) {\n          console.log(\"stop clicado\");\n        } else {\n          playBtn.classList.remove(\"hidden\");\n          pauseBtn.classList.add(\"hidden\");\n          console.log(\"timer resetado\");\n        }\n      };\n    }\n  }]);\n  return Controlls;\n}();\nvar Timer = /*#__PURE__*/function (_Controlls) {\n  _inherits(Timer, _Controlls);\n  var _super = _createSuper(Timer);\n  function Timer() {\n    _classCallCheck(this, Timer);\n    return _super.call(this);\n  }\n  return _createClass(Timer);\n}(Controlls);\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/Timer.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Mode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mode.js */ \"./src/js/Mode.js\");\n/* harmony import */ var _Timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer.js */ \"./src/js/Timer.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n// arquivo que roda as classes e faz todo o app funcionar\n\n\n\nvar App = /*#__PURE__*/_createClass(function App() {\n  _classCallCheck(this, App);\n  new _Mode_js__WEBPACK_IMPORTED_MODULE_0__.Mode();\n  new _Timer_js__WEBPACK_IMPORTED_MODULE_1__.Timer();\n});\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/app.js?");

/***/ }),

/***/ "./src/js/elementsHTML.js":
/*!********************************!*\
  !*** ./src/js/elementsHTML.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elementsHTML: () => (/* binding */ elementsHTML)\n/* harmony export */ });\nvar main = document.querySelector(\"body\");\nvar app = document.querySelector(\"#app\");\n\n// elements timer\nvar minutes = document.querySelector(\".timer #minutes\");\nvar seconds = document.querySelector(\".timer #seconds\");\n\n// elements controller timer\nvar allControllers = document.querySelector(\".Controlls\");\nvar playAndpause = document.querySelector(\"#playAndpause\");\nvar playBtn = document.querySelector(\"#playBtn\");\nvar pauseBtn = document.querySelector(\"#pauseBtn\");\nvar stopBtn = document.querySelector(\"#stopBtn\");\nvar addTimerBtn = document.querySelector(\"#addBtn\");\nvar subtractTimerBtn = document.querySelector(\"#subtractBtn\");\n\n// elements mode ligth/dark\nvar modeBtn = document.querySelector(\"#modeBtn\");\nvar lightModeBtn = document.querySelector(\"#lightMode-Btn\");\nvar darkModeBtn = document.querySelector(\"#darkMode-Btn\");\nvar cardsGroup = document.querySelectorAll(\".card\");\nvar slideVolumeGroup = document.querySelectorAll(\".slide-volume\");\nvar elementsHTML = {\n  main: main,\n  app: app,\n  minutes: minutes,\n  seconds: seconds,\n  modeBtn: modeBtn,\n  lightModeBtn: lightModeBtn,\n  darkModeBtn: darkModeBtn,\n  cardsGroup: cardsGroup,\n  slideVolumeGroup: slideVolumeGroup,\n  allControllers: allControllers,\n  playAndpause: playAndpause,\n  playBtn: playBtn,\n  pauseBtn: pauseBtn,\n  stopBtn: stopBtn,\n  addTimerBtn: addTimerBtn,\n  subtractTimerBtn: subtractTimerBtn\n};\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/elementsHTML.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\n\nnew _app_js__WEBPACK_IMPORTED_MODULE_1__.App();\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://impruvedfocustimer/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;