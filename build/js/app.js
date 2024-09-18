/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/assets/js/app.js":
/*!*********************************!*\
  !*** ./source/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./nav */ "./source/assets/js/nav.js");
var date = new Date();
var currentYear = date.getFullYear();

// Bloco Home
var exp = document.getElementById('exp');
var expTot = currentYear - 2018;
if (exp) exp.innerText = "".concat(expTot, " anos");

// Bloco Footer
if (currentYear === 2024) document.getElementById('current-year').innerText = currentYear;else document.getElementById('current-year').innerText = "2024 - ".concat(currentYear);

// Menu
var menuBtn = document.getElementById('menu-collapse');
var navbar = document.getElementById('navbar-default');
menuBtn.addEventListener('click', function () {
  navbar.classList.toggle('hidden');
});

// Limite de texto
var descriptions = document.querySelectorAll('#description');
if (descriptions.length) {
  descriptions.forEach(function (description) {
    if (description.innerText.length >= 94) description.innerText = "".concat(description.innerText.slice(0, 94), "...");
  });
}

// Incrementa Jobs
var jobs = document.getElementById('jobs');
window.addEventListener('scroll', function () {
  if (jobs && jobs.getBoundingClientRect().y >= 970) {
    var count = 0;
    var interval = setInterval(function () {
      count = count + 1;
      jobs.innerText = "".concat(count, "+");
      if (count === 10) clearInterval(interval);
    }, 150);
  }
});

// Init Functions
window.addEventListener('load', function () {
  tagCodes = document.querySelectorAll('code');
  if (tagCodes) {
    tagCodes.forEach(function (code) {
      code.innerHTML = "<div class=\"flex items-center gap-1.5 mb-4\"> \n                                <div class=\"w-3 h-3 rounded-full bg-[#F77963]\"></div> \n                                <div class=\"w-3 h-3 rounded-full bg-[#F89B4A]\"></div> \n                                <div class=\"w-3 h-3 rounded-full bg-[#41C662]\"></div> \n                              </div>" + code.innerHTML;
    });
  }
});

// Easter Egg
var loading = function loading() {
  var pipe = [];
  var count = 0;
  var interval = setInterval(function () {
    count++;
    pipe.push('|');
    console.clear();
    console.log("%cBaixando... ".concat(pipe.join('|')), 'font-size: .675rem; font-weight: 700');
    if (count === 10) clearInterval(interval);
  }, 300);
};
window.addEventListener('load', function () {
  console.clear();
  console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700');
  console.log('%cFull Stack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400');
  console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400');
});

// @todo Restore HighlightJS

/***/ }),

/***/ "./source/assets/js/nav.js":
/*!*********************************!*\
  !*** ./source/assets/js/nav.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Navbar Toggle
// provided by: https://mydnic.be/post/responsive-navigation-bar-with-tailwind-css-and-a-drop-of-javascript
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the "main-nav" element
        var $target = document.getElementById('main-nav');

        // Toggle the class on "main-nav"
        $target.classList.toggle('hidden');
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9uYXYuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRhdGUiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImV4cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleHBUb3QiLCJpbm5lclRleHQiLCJjb25jYXQiLCJtZW51QnRuIiwibmF2YmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRlc2NyaXB0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsImpvYnMiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRhZ0NvZGVzIiwiY29kZSIsImlubmVySFRNTCIsImxvYWRpbmciLCJwaXBlIiwicHVzaCIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsImpvaW4iLCIkbmF2YmFyQnVyZ2VycyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2FsbCIsIiRlbCIsIiR0YXJnZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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QUFJLENBQUNyQyxRQUFRLENBQUNXLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUUvRjtFQUNBLElBQUl1QixjQUFjLENBQUN0QixNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBRTNCO0lBQ0FzQixjQUFjLENBQUNyQixPQUFPLENBQUMsVUFBVXlCLEdBQUcsRUFBRTtNQUNsQ0EsR0FBRyxDQUFDL0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFFdEM7UUFDQSxJQUFJZ0MsT0FBTyxHQUFHdkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDOztRQUVqRDtRQUNBc0MsT0FBTyxDQUFDL0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BRXRDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDLEMiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuL25hdicpO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGU7XG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuXG4vLyBCbG9jbyBIb21lXG5jb25zdCBleHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwJylcbmNvbnN0IGV4cFRvdCA9ICBjdXJyZW50WWVhciAtIDIwMTg7XG5pZihleHApIGV4cC5pbm5lclRleHQgPSBgJHtleHBUb3R9IGFub3NgXG5cbi8vIEJsb2NvIEZvb3RlclxuaWYgKGN1cnJlbnRZZWFyID09PSAyMDI0KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXllYXInKS5pbm5lclRleHQgPSBjdXJyZW50WWVhclxuZWxzZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXllYXInKS5pbm5lclRleHQgPSBgMjAyNCAtICR7Y3VycmVudFllYXJ9YFxuXG5cbi8vIE1lbnVcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb2xsYXBzZScpXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyLWRlZmF1bHQnKVxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbn0pXG5cbi8vIExpbWl0ZSBkZSB0ZXh0b1xuY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Rlc2NyaXB0aW9uJylcbmlmIChkZXNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgZGVzY3JpcHRpb25zLmZvckVhY2goZGVzY3JpcHRpb24gPT4ge1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24uaW5uZXJUZXh0Lmxlbmd0aCA+PSA5NCkgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7ZGVzY3JpcHRpb24uaW5uZXJUZXh0LnNsaWNlKDAsIDk0KX0uLi5gXG4gICAgfSlcbn1cblxuLy8gSW5jcmVtZW50YSBKb2JzXG5jb25zdCBqb2JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYnMnKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYgKGpvYnMgJiYgam9icy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ID49IDk3MCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICAgICAgam9icy5pbm5lclRleHQgPSBgJHtjb3VudH0rYDtcblxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxMCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfVxufSlcblxuLy8gSW5pdCBGdW5jdGlvbnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHRhZ0NvZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY29kZScpXG5cbiAgICBpZiAodGFnQ29kZXMpIHtcbiAgICAgICAgdGFnQ29kZXMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG1iLTRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bI0Y3Nzk2M11cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bI0Y4OUI0QV1cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bIzQxQzY2Ml1cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gICsgY29kZS5pbm5lckhUTUw7XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuLy8gRWFzdGVyIEVnZ1xuY29uc3QgbG9hZGluZyA9ICgpID0+IHtcbiAgICBsZXQgcGlwZSA9IFtdXG4gICAgbGV0IGNvdW50ID0gMFxuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIHBpcGUucHVzaCgnfCcpO1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY0JhaXhhbmRvLi4uICR7cGlwZS5qb2luKCd8Jyl9YCwgJ2ZvbnQtc2l6ZTogLjY3NXJlbTsgZm9udC13ZWlnaHQ6IDcwMCcpXG5cbiAgICAgICAgaWYgKGNvdW50ID09PSAxMCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9LCAzMDApXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgIGNvbnNvbGUubG9nKCclY01vaXPDqXMgRmF1c3RvJywgJ2NvbG9yOiAjZjk3MzE2OyBmb250LXNpemU6IDNyZW07IGZvbnQtd2VpZ2h0OiA3MDAnKVxuICAgIGNvbnNvbGUubG9nKCclY0Z1bGwgU3RhY2sgRGV2ZWxvcGVyIHwgUEhQIHwgTGFyYXZlbCB8IFZ1ZSBKcycsICdjb2xvcjogI2Y5NzMxNjsgZm9udC1zaXplOiAxLjI1cmVtOyBmb250LXdlaWdodDogNDAwJylcbiAgICBjb25zb2xlLmxvZygnJWNPdXV1LCBvIHF1ZSBjw6ogdGEgZmF6ZW5kbyBhcXVpPz8/IPCfq6MnLCAnZm9udC1zaXplOiAxLjI1cmVtOyBmb250LXdlaWdodDogNDAwJylcbn0pXG5cbi8vIEB0b2RvIFJlc3RvcmUgSGlnaGxpZ2h0SlMiLCIvLyBOYXZiYXIgVG9nZ2xlXG4vLyBwcm92aWRlZCBieTogaHR0cHM6Ly9teWRuaWMuYmUvcG9zdC9yZXNwb25zaXZlLW5hdmlnYXRpb24tYmFyLXdpdGgtdGFpbHdpbmQtY3NzLWFuZC1hLWRyb3Atb2YtamF2YXNjcmlwdFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIEdldCBhbGwgXCJuYXZiYXItYnVyZ2VyXCIgZWxlbWVudHNcbiAgICB2YXIgJG5hdmJhckJ1cmdlcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLWJ1cmdlcicpLCAwKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbmF2YmFyIGJ1cmdlcnNcbiAgICBpZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggb2YgdGhlbVxuICAgICAgICAkbmF2YmFyQnVyZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgICAgICAgICRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgXCJtYWluLW5hdlwiIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLW5hdicpO1xuXG4gICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBjbGFzcyBvbiBcIm1haW4tbmF2XCJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9