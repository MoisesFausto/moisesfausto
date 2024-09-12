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

// Easter Egg
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9uYXYuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRhdGUiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImV4cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleHBUb3QiLCJpbm5lclRleHQiLCJjb25jYXQiLCJtZW51QnRuIiwibmF2YmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRlc2NyaXB0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsIndpbmRvdyIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsIiRuYXZiYXJCdXJnZXJzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwiJGVsIiwiJHRhcmdldCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQs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QUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDLENBQUMsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2UvYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsInJlcXVpcmUoJy4vbmF2Jyk7XG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZTtcbmNvbnN0IGN1cnJlbnRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG5cbi8vIEJsb2NvIEhvbWVcbmNvbnN0IGV4cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHAnKVxuY29uc3QgZXhwVG90ID0gIGN1cnJlbnRZZWFyIC0gMjAxODtcbmlmKGV4cCkgZXhwLmlubmVyVGV4dCA9IGAke2V4cFRvdH0gYW5vc2BcblxuLy8gQmxvY28gRm9vdGVyXG5pZiAoY3VycmVudFllYXIgPT09IDIwMjQpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQteWVhcicpLmlubmVyVGV4dCA9IGN1cnJlbnRZZWFyXG5lbHNlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQteWVhcicpLmlubmVyVGV4dCA9IGAyMDI0IC0gJHtjdXJyZW50WWVhcn1gXG5cblxuLy8gTWVudVxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWNvbGxhcHNlJylcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItZGVmYXVsdCcpXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxufSlcblxuLy8gTGltaXRlIGRlIHRleHRvXG5jb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVzY3JpcHRpb24nKVxuaWYgKGRlc2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICBkZXNjcmlwdGlvbnMuZm9yRWFjaChkZXNjcmlwdGlvbiA9PiB7XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbi5pbm5lclRleHQubGVuZ3RoID49IDk0KSBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtkZXNjcmlwdGlvbi5pbm5lclRleHQuc2xpY2UoMCwgOTQpfS4uLmBcbiAgICB9KVxufVxuXG4vLyBFYXN0ZXIgRWdnXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICBjb25zb2xlLmxvZygnJWNNb2lzw6lzIEZhdXN0bycsICdjb2xvcjogI2Y5NzMxNjsgZm9udC1zaXplOiAzcmVtOyBmb250LXdlaWdodDogNzAwJylcbiAgICBjb25zb2xlLmxvZygnJWNGdWxsIFN0YWNrIERldmVsb3BlciB8IFBIUCB8IExhcmF2ZWwgfCBWdWUgSnMnLCAnY29sb3I6ICNmOTczMTY7IGZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG4gICAgY29uc29sZS5sb2coJyVjT3V1dSwgbyBxdWUgY8OqIHRhIGZhemVuZG8gYXF1aT8/PyDwn6ujJywgJ2ZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG59KVxuXG4vLyBAdG9kbyBSZXN0b3JlIEhpZ2hsaWdodEpTIiwiLy8gTmF2YmFyIFRvZ2dsZVxuLy8gcHJvdmlkZWQgYnk6IGh0dHBzOi8vbXlkbmljLmJlL3Bvc3QvcmVzcG9uc2l2ZS1uYXZpZ2F0aW9uLWJhci13aXRoLXRhaWx3aW5kLWNzcy1hbmQtYS1kcm9wLW9mLWphdmFzY3JpcHRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXG4gICAgdmFyICRuYXZiYXJCdXJnZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXJnZXInKSwgMCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG5hdmJhciBidXJnZXJzXG4gICAgaWYgKCRuYXZiYXJCdXJnZXJzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAvLyBBZGQgYSBjbGljayBldmVudCBvbiBlYWNoIG9mIHRoZW1cbiAgICAgICAgJG5hdmJhckJ1cmdlcnMuZm9yRWFjaChmdW5jdGlvbiAoJGVsKSB7XG4gICAgICAgICAgICAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIFwibWFpbi1uYXZcIiBlbGVtZW50XG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1uYXYnKTtcblxuICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSB0aGUgY2xhc3Mgb24gXCJtYWluLW5hdlwiXG4gICAgICAgICAgICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==