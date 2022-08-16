/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");


function getPos() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

function apiCall(latitude, longitude) {
  return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"));
}

function apiSearch(loc) {
  return fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(loc, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"));
}

async function weatherLoad() {
  const userPos = await getPos();
  const userLat = userPos.coords.latitude;
  const userLong = userPos.coords.longitude;
  const userAPI = await apiCall(userLat, userLong);
  const userJSON = await userAPI.json();
  const userWeatherData = {
    loc: userJSON.name,
    country: userJSON.sys.country,
    temp: userJSON.main.temp,
    feelsLike: userJSON.main.feels_like,
    desc: userJSON.weather[0].description,
    humidity: userJSON.main.humidity,
    windSpeed: userJSON.wind.speed
  };
  return userWeatherData;
}

async function searchWeather(location) {
  const weatherSearch = await apiSearch(location);
  const weatherJSON = await weatherSearch.json();
  const weatherData = {
    loc: weatherJSON.name,
    country: weatherJSON.sys.country,
    temp: weatherJSON.main.temp,
    feelsLike: weatherJSON.main.feels_like,
    desc: weatherJSON.weather[0].description,
    humidity: weatherJSON.main.humidity,
    windSpeed: weatherJSON.wind.speed
  };
  return weatherData;
}

weatherLoad();
searchWeather('Tallinn');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmZ1bmN0aW9uIGdldFBvcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzLCByZWopO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFwaUNhbGwobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9MzFkNjBhZTIyOTA2MDAyNDY0ZTBlN2Y0ZWY2MDhiYzVgKTtcbn1cblxuZnVuY3Rpb24gYXBpU2VhcmNoKGxvYykge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jfSZ1bml0cz1tZXRyaWMmYXBwaWQ9MzFkNjBhZTIyOTA2MDAyNDY0ZTBlN2Y0ZWY2MDhiYzVgKVxufVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyTG9hZCgpIHtcbiAgICBjb25zdCB1c2VyUG9zID0gYXdhaXQgZ2V0UG9zKCk7XG4gICAgY29uc3QgdXNlckxhdCA9IHVzZXJQb3MuY29vcmRzLmxhdGl0dWRlO1xuICAgIGNvbnN0IHVzZXJMb25nID0gdXNlclBvcy5jb29yZHMubG9uZ2l0dWRlO1xuICAgIGNvbnN0IHVzZXJBUEkgPSBhd2FpdCBhcGlDYWxsKHVzZXJMYXQsIHVzZXJMb25nKTtcbiAgICBjb25zdCB1c2VySlNPTiA9IGF3YWl0IHVzZXJBUEkuanNvbigpO1xuICAgIGNvbnN0IHVzZXJXZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbG9jOiB1c2VySlNPTi5uYW1lLFxuICAgICAgICBjb3VudHJ5OiB1c2VySlNPTi5zeXMuY291bnRyeSxcbiAgICAgICAgdGVtcDogdXNlckpTT04ubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHVzZXJKU09OLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgZGVzYzogdXNlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgaHVtaWRpdHk6IHVzZXJKU09OLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDogdXNlckpTT04ud2luZC5zcGVlZFxuICAgIH1cbiAgICByZXR1cm4gdXNlcldlYXRoZXJEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3Qgd2VhdGhlclNlYXJjaCA9IGF3YWl0IGFwaVNlYXJjaChsb2NhdGlvbik7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCB3ZWF0aGVyU2VhcmNoLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbG9jOiB3ZWF0aGVySlNPTi5uYW1lLFxuICAgICAgICBjb3VudHJ5OiB3ZWF0aGVySlNPTi5zeXMuY291bnRyeSxcbiAgICAgICAgdGVtcDogd2VhdGhlckpTT04ubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHdlYXRoZXJKU09OLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgZGVzYzogd2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXJKU09OLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDogd2VhdGhlckpTT04ud2luZC5zcGVlZFxuICAgIH1cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbndlYXRoZXJMb2FkKCk7XG5zZWFyY2hXZWF0aGVyKCdUYWxsaW5uJyk7XG5cbiJdLCJuYW1lcyI6WyJnZXRQb3MiLCJQcm9taXNlIiwicmVzIiwicmVqIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJhcGlDYWxsIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaCIsImFwaVNlYXJjaCIsImxvYyIsIndlYXRoZXJMb2FkIiwidXNlclBvcyIsInVzZXJMYXQiLCJjb29yZHMiLCJ1c2VyTG9uZyIsInVzZXJBUEkiLCJ1c2VySlNPTiIsImpzb24iLCJ1c2VyV2VhdGhlckRhdGEiLCJuYW1lIiwiY291bnRyeSIsInN5cyIsInRlbXAiLCJtYWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImRlc2MiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJodW1pZGl0eSIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsInNlYXJjaFdlYXRoZXIiLCJsb2NhdGlvbiIsIndlYXRoZXJTZWFyY2giLCJ3ZWF0aGVySlNPTiIsIndlYXRoZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==