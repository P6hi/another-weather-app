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

let regionNames = new Intl.DisplayNames(['en'], {
  type: 'region'
});

function getPos() {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
}

function apiCall(latitude, longitude) {
  return fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(latitude, "&lon=").concat(longitude, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"), {
    mode: 'cors'
  });
}

function apiSearch(loc) {
  return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(loc, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"), {
    mode: 'cors'
  });
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
    windSpeed: userJSON.wind.speed,
    icon: userJSON.weather[0].icon
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
    windSpeed: weatherJSON.wind.speed,
    icon: weatherJSON.weather[0].icon
  };
  return weatherData;
}

function addToDOM(weatherObj) {
  const body = document.querySelector('body');
  const container = document.querySelector('.weather-info');
  container.textContent = '';
  const pLoc = document.createElement('p');
  const pTemp = document.createElement('p');
  const pFeels = document.createElement('p');
  const pDesc = document.createElement('p');
  const pHumid = document.createElement('p');
  const pWind = document.createElement('p');
  const icon = document.createElement('img');
  icon.src = "http://openweathermap.org/img/wn/".concat(weatherObj.icon, ".png");
  pLoc.textContent = "".concat(weatherObj.loc, ", ").concat(regionNames.of(weatherObj.country));
  pTemp.textContent = "Temperature: ".concat(weatherObj.temp, "\xB0C");
  pFeels.textContent = "Feels like: ".concat(weatherObj.feelsLike, "\xB0C");
  pDesc.textContent = "Weather: ".concat(weatherObj.desc);
  pHumid.textContent = "Humidity: ".concat(weatherObj.humidity, "%");
  pWind.textContent = "Wind speed: ".concat(weatherObj.windSpeed, " m/s");
  container.appendChild(pLoc);
  container.appendChild(pTemp);
  container.appendChild(pFeels);
  container.appendChild(pDesc);
  container.appendChild(pHumid);
  container.appendChild(pWind);
  container.appendChild(icon);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLElBQUlwQixRQUFRLENBQUNvQixJQUFELENBQW5DO0FBQ0gsQ0FGRDtBQUlBLE1BQU1DLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBZDtBQUNBLE1BQU1rQixTQUFTLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbEI7QUFFQWtCLFNBQVMsQ0FBQ0osZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBcUNLLENBQUQsSUFBTztFQUN2Q0EsQ0FBQyxDQUFDQyxjQUFGO0VBQ0EsTUFBTUMsU0FBUyxHQUFHSixLQUFLLENBQUNLLEtBQXhCO0VBQ0EvQixhQUFhLENBQUM4QixTQUFELENBQWIsQ0FBeUJOLElBQXpCLENBQThCQyxJQUFJLElBQUlwQixRQUFRLENBQUNvQixJQUFELENBQTlDO0FBQ0gsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5vdGhlci13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW5vdGhlci13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxubGV0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwge3R5cGU6ICdyZWdpb24nfSk7XG5cbmZ1bmN0aW9uIGdldFBvcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzLCByZWopO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFwaUNhbGwobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9MzFkNjBhZTIyOTA2MDAyNDY0ZTBlN2Y0ZWY2MDhiYzVgLCB7bW9kZTogJ2NvcnMnfSk7XG59XG5cbmZ1bmN0aW9uIGFwaVNlYXJjaChsb2MpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2N9JnVuaXRzPW1ldHJpYyZhcHBpZD0zMWQ2MGFlMjI5MDYwMDI0NjRlMGU3ZjRlZjYwOGJjNWAsIHttb2RlOiAnY29ycyd9KVxufVxuXG5hc3luYyBmdW5jdGlvbiB3ZWF0aGVyTG9hZCgpIHtcbiAgICBjb25zdCB1c2VyUG9zID0gYXdhaXQgZ2V0UG9zKCk7XG4gICAgY29uc3QgdXNlckxhdCA9IHVzZXJQb3MuY29vcmRzLmxhdGl0dWRlO1xuICAgIGNvbnN0IHVzZXJMb25nID0gdXNlclBvcy5jb29yZHMubG9uZ2l0dWRlO1xuICAgIGNvbnN0IHVzZXJBUEkgPSBhd2FpdCBhcGlDYWxsKHVzZXJMYXQsIHVzZXJMb25nKTtcbiAgICBjb25zdCB1c2VySlNPTiA9IGF3YWl0IHVzZXJBUEkuanNvbigpO1xuICAgIGNvbnN0IHVzZXJXZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbG9jOiB1c2VySlNPTi5uYW1lLFxuICAgICAgICBjb3VudHJ5OiB1c2VySlNPTi5zeXMuY291bnRyeSxcbiAgICAgICAgdGVtcDogdXNlckpTT04ubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHVzZXJKU09OLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgZGVzYzogdXNlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJKU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSksXG4gICAgICAgIGh1bWlkaXR5OiB1c2VySlNPTi5tYWluLmh1bWlkaXR5LFxuICAgICAgICB3aW5kU3BlZWQ6IHVzZXJKU09OLndpbmQuc3BlZWQsXG4gICAgICAgIGljb246IHVzZXJKU09OLndlYXRoZXJbMF0uaWNvblxuICAgIH1cbiAgICByZXR1cm4gdXNlcldlYXRoZXJEYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3Qgd2VhdGhlclNlYXJjaCA9IGF3YWl0IGFwaVNlYXJjaChsb2NhdGlvbik7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCB3ZWF0aGVyU2VhcmNoLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbG9jOiB3ZWF0aGVySlNPTi5uYW1lLFxuICAgICAgICBjb3VudHJ5OiB3ZWF0aGVySlNPTi5zeXMuY291bnRyeSxcbiAgICAgICAgdGVtcDogd2VhdGhlckpTT04ubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHdlYXRoZXJKU09OLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgZGVzYzogd2VhdGhlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdlYXRoZXJKU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSksXG4gICAgICAgIGh1bWlkaXR5OiB3ZWF0aGVySlNPTi5tYWluLmh1bWlkaXR5LFxuICAgICAgICB3aW5kU3BlZWQ6IHdlYXRoZXJKU09OLndpbmQuc3BlZWQsXG4gICAgICAgIGljb246IHdlYXRoZXJKU09OLndlYXRoZXJbMF0uaWNvblxuICAgIH1cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbmZ1bmN0aW9uIGFkZFRvRE9NKHdlYXRoZXJPYmopIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm8nKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwTG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBGZWVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwSHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgaWNvbi5zcmMgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlck9iai5pY29ufS5wbmdgXG5cbiAgICBwTG9jLnRleHRDb250ZW50ID0gYCR7d2VhdGhlck9iai5sb2N9LCAke3JlZ2lvbk5hbWVzLm9mKHdlYXRoZXJPYmouY291bnRyeSl9YDtcbiAgICBwVGVtcC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHt3ZWF0aGVyT2JqLnRlbXB9wrBDYDtcbiAgICBwRmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt3ZWF0aGVyT2JqLmZlZWxzTGlrZX3CsENgO1xuICAgIHBEZXNjLnRleHRDb250ZW50ID0gYFdlYXRoZXI6ICR7d2VhdGhlck9iai5kZXNjfWA7XG4gICAgcEh1bWlkLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJPYmouaHVtaWRpdHl9JWA7XG4gICAgcFdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyT2JqLndpbmRTcGVlZH0gbS9zYDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwTG9jKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFRlbXApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwRmVlbHMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwRGVzYyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBIdW1pZCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBXaW5kKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHdlYXRoZXJMb2FkKCkudGhlbihkYXRhID0+IGFkZFRvRE9NKGRhdGEpKTtcbn0pXG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5wdXQnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcklucHV0ID0gaW5wdXQudmFsdWU7XG4gICAgc2VhcmNoV2VhdGhlcih1c2VySW5wdXQpLnRoZW4oZGF0YSA9PiBhZGRUb0RPTShkYXRhKSk7XG59KSJdLCJuYW1lcyI6WyJyZWdpb25OYW1lcyIsIkludGwiLCJEaXNwbGF5TmFtZXMiLCJ0eXBlIiwiZ2V0UG9zIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiYXBpQ2FsbCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZmV0Y2giLCJtb2RlIiwiYXBpU2VhcmNoIiwibG9jIiwid2VhdGhlckxvYWQiLCJ1c2VyUG9zIiwidXNlckxhdCIsImNvb3JkcyIsInVzZXJMb25nIiwidXNlckFQSSIsInVzZXJKU09OIiwianNvbiIsInVzZXJXZWF0aGVyRGF0YSIsIm5hbWUiLCJjb3VudHJ5Iiwic3lzIiwidGVtcCIsIm1haW4iLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiZGVzYyIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJodW1pZGl0eSIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsImljb24iLCJzZWFyY2hXZWF0aGVyIiwibG9jYXRpb24iLCJ3ZWF0aGVyU2VhcmNoIiwid2VhdGhlckpTT04iLCJ3ZWF0aGVyRGF0YSIsImFkZFRvRE9NIiwid2VhdGhlck9iaiIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJ0ZXh0Q29udGVudCIsInBMb2MiLCJjcmVhdGVFbGVtZW50IiwicFRlbXAiLCJwRmVlbHMiLCJwRGVzYyIsInBIdW1pZCIsInBXaW5kIiwic3JjIiwib2YiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0aGVuIiwiZGF0YSIsImlucHV0Iiwic3VibWl0QnRuIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcklucHV0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9