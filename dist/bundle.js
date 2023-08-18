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

/***/ "./src/js/elementsHTML.js":
/*!********************************!*\
  !*** ./src/js/elementsHTML.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elementsHTML: () => (/* binding */ elementsHTML)\n/* harmony export */ });\nvar main = document.querySelector(\"body\");\nvar app = document.querySelector(\"#app\");\n\n// elements timer\nvar minutes = document.querySelector(\".timer #minutes\");\nvar seconds = document.querySelector(\".timer #seconds\");\n\n// elements controller timer\nvar allControllers = document.querySelector(\".Controlls\");\n\n// elements mode ligth/dark\nvar modeBtn = document.querySelector(\"#modeBtn\");\nvar lightModeBtn = document.querySelector(\"#lightMode-Btn\");\nvar darkModeBtn = document.querySelector(\"#darkMode-Btn\");\nvar cardsGroup = document.querySelectorAll(\".card\");\nvar slideVolumeGroup = document.querySelectorAll(\".slide-volume\");\nvar elementsHTML = {\n  main: main,\n  app: app,\n  minutes: minutes,\n  seconds: seconds,\n  allControllers: allControllers,\n  modeBtn: modeBtn,\n  lightModeBtn: lightModeBtn,\n  darkModeBtn: darkModeBtn,\n  cardsGroup: cardsGroup,\n  slideVolumeGroup: slideVolumeGroup\n};\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/elementsHTML.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _elementsHTML_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementsHTML.js */ \"./src/js/elementsHTML.js\");\n/* harmony import */ var _mode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mode.js */ \"./src/js/mode.js\");\n// arquivo que roda as classes e faz todo o app funcionar\n\n\nvar modeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_1__.elementsHTML.modeBtn;\n\n\n// Funcionalidade do modo Ligth/Dark\nnew _mode_js__WEBPACK_IMPORTED_MODULE_2__.Mode(modeBtn);\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/index.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mode: () => (/* binding */ Mode)\n/* harmony export */ });\n/* harmony import */ var _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementsHTML.js */ \"./src/js/elementsHTML.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar main = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.main,\n  lightModeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.lightModeBtn,\n  darkModeBtn = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.darkModeBtn,\n  minutes = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.minutes,\n  seconds = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.seconds,\n  allControllers = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.allControllers,\n  cardsGroup = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.cardsGroup,\n  slideVolumeGroup = _elementsHTML_js__WEBPACK_IMPORTED_MODULE_0__.elementsHTML.slideVolumeGroup;\n\n// classe da logica do modo ligth/dark\nvar Mode = /*#__PURE__*/_createClass(function Mode(element) {\n  _classCallCheck(this, Mode);\n  element.onclick = function () {\n    // logica do icone de ligth/dark\n    lightModeBtn.classList.toggle(\"hidden\");\n    darkModeBtn.classList.toggle(\"hidden\");\n\n    // logica da versao dark mode do timer\n    main.classList.toggle(\"backgroundDark\");\n    minutes.classList.toggle(\"darkmode-defaultColor\");\n    seconds.classList.toggle(\"darkmode-defaultColor\");\n\n    // logica da versao dark mode dos icones dos controles do timer\n    allControllers.classList.toggle(\"darkmode-defaultColor-Btns\");\n\n    // logica da versao dark mode dos cards(backgroud e icones)\n    cardsGroup.forEach(function (card) {\n      card.classList.toggle(\"darkmode-defaultColor-Cards\");\n      card.classList.toggle(\"darkmode-defaultColor-Cards-svg\");\n    });\n\n    // logica da versao dark mode do slide\n    slideVolumeGroup.forEach(function (slide) {\n      if (!darkModeBtn.classList.contains(\"hidden\")) {\n        slide.classList.remove(\"slide-volume\");\n        slide.classList.add(\"slide-volume-darkMode\");\n      }\n      if (darkModeBtn.classList.contains(\"hidden\")) {\n        slide.classList.add(\"slide-volume\");\n        slide.classList.remove(\"slide-volume-darkMode\");\n      }\n    });\n  };\n});\n\n//# sourceURL=webpack://impruvedfocustimer/./src/js/mode.js?");

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