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
    desc: userJSON.weather[0].description.charAt(0).toUpperCase() + userJSON.weather[0].description.slice(1),
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
    desc: weatherJSON.weather[0].description.charAt(0).toUpperCase() + weatherJSON.weather[0].description.slice(1),
    humidity: weatherJSON.main.humidity,
    windSpeed: weatherJSON.wind.speed
  };
  return weatherData;
}

function addToDOM(weatherObj) {
  const body = document.querySelector('body');
  const container = document.querySelector('.weather-info');
  container.textContent = '';
  const pLoc = document.createElement('p');
  const pCountry = document.createElement('p');
  const pTemp = document.createElement('p');
  const pFeels = document.createElement('p');
  const pDesc = document.createElement('p');
  const pHumid = document.createElement('p');
  const pWind = document.createElement('p');
  pLoc.textContent = weatherObj.loc;
  pCountry.textContent = weatherObj.country;
  pTemp.textContent = "".concat(weatherObj.temp, "\xB0C");
  pFeels.textContent = "Feels like: ".concat(weatherObj.feelsLike, "\xB0C");
  pDesc.textContent = weatherObj.desc;
  pHumid.textContent = "Humidity: ".concat(weatherObj.humidity, "%");
  pWind.textContent = "Wind speed: ".concat(weatherObj.windSpeed, " m/s");
  container.appendChild(pLoc);
  container.appendChild(pCountry);
  container.appendChild(pTemp);
  container.appendChild(pFeels);
  container.appendChild(pDesc);
  container.appendChild(pHumid);
  container.appendChild(pWind);
  body.appendChild(container);
}

window.addEventListener('load', () => {
  weatherLoad().then(data => addToDOM(data));
});
const input = document.querySelector('.weather-input');
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const userInput = input.value;
  searchWeather(userInput).then(data => addToDOM(data));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q21CLElBQUQsQ0FBOUM7QUFDSCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYW5vdGhlci13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5vdGhlci13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5mdW5jdGlvbiBnZXRQb3MoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlcywgcmVqKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhcGlDYWxsKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPTMxZDYwYWUyMjkwNjAwMjQ2NGUwZTdmNGVmNjA4YmM1YCk7XG59XG5cbmZ1bmN0aW9uIGFwaVNlYXJjaChsb2MpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY30mdW5pdHM9bWV0cmljJmFwcGlkPTMxZDYwYWUyMjkwNjAwMjQ2NGUwZTdmNGVmNjA4YmM1YClcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckxvYWQoKSB7XG4gICAgY29uc3QgdXNlclBvcyA9IGF3YWl0IGdldFBvcygpO1xuICAgIGNvbnN0IHVzZXJMYXQgPSB1c2VyUG9zLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICBjb25zdCB1c2VyTG9uZyA9IHVzZXJQb3MuY29vcmRzLmxvbmdpdHVkZTtcbiAgICBjb25zdCB1c2VyQVBJID0gYXdhaXQgYXBpQ2FsbCh1c2VyTGF0LCB1c2VyTG9uZyk7XG4gICAgY29uc3QgdXNlckpTT04gPSBhd2FpdCB1c2VyQVBJLmpzb24oKTtcbiAgICBjb25zdCB1c2VyV2VhdGhlckRhdGEgPSB7XG4gICAgICAgIGxvYzogdXNlckpTT04ubmFtZSxcbiAgICAgICAgY291bnRyeTogdXNlckpTT04uc3lzLmNvdW50cnksXG4gICAgICAgIHRlbXA6IHVzZXJKU09OLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiB1c2VySlNPTi5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAgIGRlc2M6IHVzZXJKU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1c2VySlNPTi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNsaWNlKDEpLFxuICAgICAgICBodW1pZGl0eTogdXNlckpTT04ubWFpbi5odW1pZGl0eSxcbiAgICAgICAgd2luZFNwZWVkOiB1c2VySlNPTi53aW5kLnNwZWVkXG4gICAgfVxuICAgIHJldHVybiB1c2VyV2VhdGhlckRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCB3ZWF0aGVyU2VhcmNoID0gYXdhaXQgYXBpU2VhcmNoKGxvY2F0aW9uKTtcbiAgICBjb25zdCB3ZWF0aGVySlNPTiA9IGF3YWl0IHdlYXRoZXJTZWFyY2guanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0ge1xuICAgICAgICBsb2M6IHdlYXRoZXJKU09OLm5hbWUsXG4gICAgICAgIGNvdW50cnk6IHdlYXRoZXJKU09OLnN5cy5jb3VudHJ5LFxuICAgICAgICB0ZW1wOiB3ZWF0aGVySlNPTi5tYWluLnRlbXAsXG4gICAgICAgIGZlZWxzTGlrZTogd2VhdGhlckpTT04ubWFpbi5mZWVsc19saWtlLFxuICAgICAgICBkZXNjOiB3ZWF0aGVySlNPTi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbi5zbGljZSgxKSxcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXJKU09OLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmRTcGVlZDogd2VhdGhlckpTT04ud2luZC5zcGVlZFxuICAgIH1cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRE9NKHdlYXRoZXJPYmopIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm8nKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwTG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBGZWVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwSHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFdpbmQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHBMb2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLmxvYztcbiAgICBwQ291bnRyeS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmouY291bnRyeTtcbiAgICBwVGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJPYmoudGVtcH3CsENgO1xuICAgIHBGZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke3dlYXRoZXJPYmouZmVlbHNMaWtlfcKwQ2A7XG4gICAgcERlc2MudGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLmRlc2M7XG4gICAgcEh1bWlkLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJPYmouaHVtaWRpdHl9JWA7XG4gICAgcFdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyT2JqLndpbmRTcGVlZH0gbS9zYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwTG9jKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocENvdW50cnkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwVGVtcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBGZWVscyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBEZXNjKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocEh1bWlkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFdpbmQpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICB3ZWF0aGVyTG9hZCgpLnRoZW4oZGF0YSA9PiBhZGRUb0RPTShkYXRhKSk7XG59KVxuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWlucHV0Jyk7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGlucHV0LnZhbHVlO1xuICAgIHNlYXJjaFdlYXRoZXIodXNlcklucHV0KS50aGVuKGRhdGEgPT4gYWRkVG9ET00oZGF0YSkpO1xufSlcblxuIl0sIm5hbWVzIjpbImdldFBvcyIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImFwaUNhbGwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZldGNoIiwiYXBpU2VhcmNoIiwibG9jIiwid2VhdGhlckxvYWQiLCJ1c2VyUG9zIiwidXNlckxhdCIsImNvb3JkcyIsInVzZXJMb25nIiwidXNlckFQSSIsInVzZXJKU09OIiwianNvbiIsInVzZXJXZWF0aGVyRGF0YSIsIm5hbWUiLCJjb3VudHJ5Iiwic3lzIiwidGVtcCIsIm1haW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiZGVzYyIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJodW1pZGl0eSIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsInNlYXJjaFdlYXRoZXIiLCJsb2NhdGlvbiIsIndlYXRoZXJTZWFyY2giLCJ3ZWF0aGVySlNPTiIsIndlYXRoZXJEYXRhIiwiYWRkVG9ET00iLCJ3ZWF0aGVyT2JqIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsInRleHRDb250ZW50IiwicExvYyIsImNyZWF0ZUVsZW1lbnQiLCJwQ291bnRyeSIsInBUZW1wIiwicEZlZWxzIiwicERlc2MiLCJwSHVtaWQiLCJwV2luZCIsImFwcGVuZENoaWxkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJkYXRhIiwiaW5wdXQiLCJzdWJtaXRCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VySW5wdXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=