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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sript */ \"./src/sript.js\");\n\r\n\r\n(0,_sript__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://itilogia/./src/index.js?");

/***/ }),

/***/ "./src/sript.js":
/*!**********************!*\
  !*** ./src/sript.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst it = () => {\r\n\r\n    document.querySelector('.main-action').addEventListener('click', () => {\r\n        document.getElementById('cars').scrollIntoView({ behavior: \"smooth\" })\r\n    })\r\n\r\n    const btns = document.querySelectorAll('.car-button');\r\n\r\n    btns.forEach(item => {\r\n        item.addEventListener('click', () => {\r\n            document.querySelector('.price-form').scrollIntoView({ behavior: \"smooth\" });\r\n        })\r\n    });\r\n\r\n    const mainSlide = document.querySelector('.main-slide');\r\n    const auto = document.querySelector('.auto');\r\n    const booking = document.querySelector('.booking');\r\n\r\n    mainSlide.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        document.querySelector('.main').scrollIntoView({ behavior: \"smooth\" })\r\n    })\r\n\r\n    auto.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        document.querySelector('.car').scrollIntoView({ behavior: \"smooth\" })\r\n    })\r\n\r\n    booking.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        document.querySelector('.price').scrollIntoView({ behavior: \"smooth\" })\r\n    })\r\n\r\n\r\n    const inputs = document.querySelectorAll('.price-input');\r\n\r\n    document.getElementById('price-action').onclick = function () {\r\n        if (inputs[0].value === '') {\r\n            alert(\"Заполните поле имя\");\r\n        } else if (inputs[1].value === '') {\r\n            alert(\"Заполните поле телефон\");\r\n        } else if (inputs[2].value === '') {\r\n            alert(\"Заполните поле автомобиль\");\r\n        } else {\r\n            alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время!');\r\n        }\r\n    }\r\n\r\n    document.addEventListener(\"DOMContentLoaded\", function () {\r\n        let layer = document.querySelector('.price-image');\r\n        document.addEventListener('mousemove', (event) => {\r\n            layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 4) + 'px,' + ((event.clientY * 0.2) / 4) + 'px,0px)';\r\n        });\r\n\r\n        const elem = document.querySelector(\".main\");\r\n        document.addEventListener('scroll', () => {\r\n            elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';\r\n        })\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (it);\r\n\n\n//# sourceURL=webpack://itilogia/./src/sript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;