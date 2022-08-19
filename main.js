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
  const userForecast = await weatherLoadForecast(userLat, userLong);
  const userForecastJSON = await userForecast.json();
  const fiveDay = [];
  userForecastJSON.list.forEach(item => {
    if (item.dt_txt.includes("12:00:00")) {
      fiveDay.push(item);
    }
  });
  const userWeatherData = {
    loc: userJSON.name,
    country: userJSON.sys.country,
    temp: userJSON.main.temp,
    feelsLike: userJSON.main.feels_like,
    desc: userJSON.weather[0].description.charAt(0).toUpperCase() + userJSON.weather[0].description.slice(1),
    humidity: userJSON.main.humidity,
    windSpeed: userJSON.wind.speed,
    icon: userJSON.weather[0].icon,
    forecast: fiveDay
  };
  return userWeatherData;
}

function addForecast(weatherObj) {
  const main = document.querySelector('.main');
  const container = document.querySelector('.forecast');
  container.textContent = '';
  weatherObj.forecast.forEach(item => {
    const date = item.dt_txt.split(' ');
    const newDate = new Date(date).toDateString();
    const forecastContainer = document.createElement('div');
    const fDate = document.createElement('p');
    const icon = document.createElement('img');
    icon.src = "http://openweathermap.org/img/wn/".concat(item.weather[0].icon, ".png");
    const fTemp = document.createElement('p');
    const fDesc = document.createElement('p');
    fDate.textContent = newDate;
    fTemp.textContent = "".concat(item.main.temp, "\xB0C");
    fDesc.textContent = "".concat(item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1));
    forecastContainer.appendChild(fDate);
    forecastContainer.appendChild(icon);
    forecastContainer.appendChild(fTemp);
    forecastContainer.appendChild(fDesc);
    container.appendChild(forecastContainer);
  });
  main.appendChild(container);
}

function weatherLoadForecast(latitude, longitude) {
  return fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(latitude, "&lon=").concat(longitude, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"), {
    mode: 'cors'
  });
}

function weatherSearchForecast(loc) {
  return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(loc, "&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5"), {
    mode: 'cors'
  });
}

async function searchWeather(location) {
  const weatherSearch = await apiSearch(location);
  const weatherJSON = await weatherSearch.json();
  const weatherForecast = await weatherSearchForecast(location);
  const weatherForecastJSON = await weatherForecast.json();
  const fiveDay = [];
  weatherForecastJSON.list.forEach(item => {
    if (item.dt_txt.includes("12:00:00")) {
      fiveDay.push(item);
    }
  });
  const weatherData = {
    loc: weatherJSON.name,
    country: weatherJSON.sys.country,
    temp: weatherJSON.main.temp,
    feelsLike: weatherJSON.main.feels_like,
    desc: weatherJSON.weather[0].description.charAt(0).toUpperCase() + weatherJSON.weather[0].description.slice(1),
    humidity: weatherJSON.main.humidity,
    windSpeed: weatherJSON.wind.speed,
    icon: weatherJSON.weather[0].icon,
    forecast: fiveDay
  };
  return weatherData;
}

function addToDOM(weatherObj) {
  const main = document.querySelector('.main');
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
  pTemp.textContent = "Temperature: ".concat(weatherObj.temp, "\xB0C (").concat(getBurgerTemperature(weatherObj.temp), "\xB0F)");
  pFeels.textContent = "Feels like: ".concat(weatherObj.feelsLike, "\xB0C (").concat(getBurgerTemperature(weatherObj.feelsLike), "\xB0F)");
  pDesc.textContent = "Weather: ".concat(weatherObj.desc);
  pHumid.textContent = "Humidity: ".concat(weatherObj.humidity, "%");
  pWind.textContent = "Wind speed: ".concat(weatherObj.windSpeed, " m/s (").concat(getBurgerSpeed(weatherObj.windSpeed), " ft/s)");
  container.appendChild(pLoc);
  container.appendChild(pTemp);
  container.appendChild(pFeels);
  container.appendChild(pDesc);
  container.appendChild(pHumid);
  container.appendChild(pWind);
  container.appendChild(icon);
  main.appendChild(container);
}

function getBurgerTemperature(tempCel) {
  var temp = parseFloat(tempCel);
  return temp * 9 / 5 + 32;
}

function getBurgerSpeed(speedMS) {
  var speed = parseFloat(speedMS);
  return speed * 3.28084;
}

window.addEventListener('load', () => {
  weatherLoad().then(data => {
    addToDOM(data);
    addForecast(data);
  });
});
const input = document.querySelector('.weather-input');
const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const userInput = input.value;
  searchWeather(userInput).then(data => {
    addToDOM(data);
    addForecast(data);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFkO0FBQ0EsTUFBTXlDLFNBQVMsR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFsQjtBQUVBeUMsU0FBUyxDQUFDSixnQkFBVixDQUEyQixPQUEzQixFQUFxQ0ssQ0FBRCxJQUFPO0VBQ3ZDQSxDQUFDLENBQUNDLGNBQUY7RUFDQSxNQUFNQyxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssS0FBeEI7RUFDQTdCLGFBQWEsQ0FBQzRCLFNBQUQsQ0FBYixDQUF5Qk4sSUFBekIsQ0FBOEJDLElBQUksSUFBSTtJQUNsQ2hCLFFBQVEsQ0FBQ2dCLElBQUQsQ0FBUjtJQUNBMUMsV0FBVyxDQUFDMEMsSUFBRCxDQUFYO0VBQ0gsQ0FIRDtBQUlILENBUEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fub3RoZXItd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbm90aGVyLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmxldCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHt0eXBlOiAncmVnaW9uJ30pO1xuXG5mdW5jdGlvbiBnZXRQb3MoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlcywgcmVqKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhcGlDYWxsKGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPTMxZDYwYWUyMjkwNjAwMjQ2NGUwZTdmNGVmNjA4YmM1YCwge21vZGU6ICdjb3JzJ30pO1xufVxuXG5mdW5jdGlvbiBhcGlTZWFyY2gobG9jKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jfSZ1bml0cz1tZXRyaWMmYXBwaWQ9MzFkNjBhZTIyOTA2MDAyNDY0ZTBlN2Y0ZWY2MDhiYzVgLCB7bW9kZTogJ2NvcnMnfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckxvYWQoKSB7XG4gICAgY29uc3QgdXNlclBvcyA9IGF3YWl0IGdldFBvcygpO1xuICAgIGNvbnN0IHVzZXJMYXQgPSB1c2VyUG9zLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICBjb25zdCB1c2VyTG9uZyA9IHVzZXJQb3MuY29vcmRzLmxvbmdpdHVkZTtcbiAgICBjb25zdCB1c2VyQVBJID0gYXdhaXQgYXBpQ2FsbCh1c2VyTGF0LCB1c2VyTG9uZyk7XG4gICAgY29uc3QgdXNlckpTT04gPSBhd2FpdCB1c2VyQVBJLmpzb24oKTtcbiAgICBjb25zdCB1c2VyRm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyTG9hZEZvcmVjYXN0KHVzZXJMYXQsIHVzZXJMb25nKTtcbiAgICBjb25zdCB1c2VyRm9yZWNhc3RKU09OID0gYXdhaXQgdXNlckZvcmVjYXN0Lmpzb24oKTtcbiAgICBjb25zdCBmaXZlRGF5ID0gW107XG4gICAgdXNlckZvcmVjYXN0SlNPTi5saXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmR0X3R4dC5pbmNsdWRlcyhcIjEyOjAwOjAwXCIpKSB7XG4gICAgICAgICAgICBmaXZlRGF5LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHVzZXJXZWF0aGVyRGF0YSA9IHtcbiAgICAgICAgbG9jOiB1c2VySlNPTi5uYW1lLFxuICAgICAgICBjb3VudHJ5OiB1c2VySlNPTi5zeXMuY291bnRyeSxcbiAgICAgICAgdGVtcDogdXNlckpTT04ubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHVzZXJKU09OLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgZGVzYzogdXNlckpTT04ud2VhdGhlclswXS5kZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHVzZXJKU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSksXG4gICAgICAgIGh1bWlkaXR5OiB1c2VySlNPTi5tYWluLmh1bWlkaXR5LFxuICAgICAgICB3aW5kU3BlZWQ6IHVzZXJKU09OLndpbmQuc3BlZWQsXG4gICAgICAgIGljb246IHVzZXJKU09OLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgZm9yZWNhc3Q6IGZpdmVEYXlcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJXZWF0aGVyRGF0YTtcbn1cblxuZnVuY3Rpb24gYWRkRm9yZWNhc3Qod2VhdGhlck9iaikge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIHdlYXRoZXJPYmouZm9yZWNhc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGl0ZW0uZHRfdHh0LnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aXRlbS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gICAgICAgIGNvbnN0IGZUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBmRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBmRGF0ZS50ZXh0Q29udGVudCA9IG5ld0RhdGU7XG4gICAgICAgIGZUZW1wLnRleHRDb250ZW50ID0gYCR7aXRlbS5tYWluLnRlbXB9wrBDYDtcbiAgICAgICAgZkRlc2MudGV4dENvbnRlbnQgPSBgJHtpdGVtLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uc2xpY2UoMSl9YDtcblxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmRGF0ZSk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmVGVtcCk7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZEZXNjKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gd2VhdGhlckxvYWRGb3JlY2FzdChsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPTMxZDYwYWUyMjkwNjAwMjQ2NGUwZTdmNGVmNjA4YmM1YCwge21vZGU6ICdjb3JzJ30pO1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyU2VhcmNoRm9yZWNhc3QobG9jKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2xvY30mdW5pdHM9bWV0cmljJmFwcGlkPTMxZDYwYWUyMjkwNjAwMjQ2NGUwZTdmNGVmNjA4YmM1YCwge21vZGU6ICdjb3JzJ30pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3Qgd2VhdGhlclNlYXJjaCA9IGF3YWl0IGFwaVNlYXJjaChsb2NhdGlvbik7XG4gICAgY29uc3Qgd2VhdGhlckpTT04gPSBhd2FpdCB3ZWF0aGVyU2VhcmNoLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyU2VhcmNoRm9yZWNhc3QobG9jYXRpb24pO1xuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEpTT04gPSBhd2FpdCB3ZWF0aGVyRm9yZWNhc3QuanNvbigpO1xuICAgIGNvbnN0IGZpdmVEYXkgPSBbXTtcbiAgICB3ZWF0aGVyRm9yZWNhc3RKU09OLmxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uZHRfdHh0LmluY2x1ZGVzKFwiMTI6MDA6MDBcIikpIHtcbiAgICAgICAgICAgIGZpdmVEYXkucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSB7XG4gICAgICAgIGxvYzogd2VhdGhlckpTT04ubmFtZSxcbiAgICAgICAgY291bnRyeTogd2VhdGhlckpTT04uc3lzLmNvdW50cnksXG4gICAgICAgIHRlbXA6IHdlYXRoZXJKU09OLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiB3ZWF0aGVySlNPTi5tYWluLmZlZWxzX2xpa2UsXG4gICAgICAgIGRlc2M6IHdlYXRoZXJKU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3ZWF0aGVySlNPTi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnNsaWNlKDEpLFxuICAgICAgICBodW1pZGl0eTogd2VhdGhlckpTT04ubWFpbi5odW1pZGl0eSxcbiAgICAgICAgd2luZFNwZWVkOiB3ZWF0aGVySlNPTi53aW5kLnNwZWVkLFxuICAgICAgICBpY29uOiB3ZWF0aGVySlNPTi53ZWF0aGVyWzBdLmljb24sXG4gICAgICAgIGZvcmVjYXN0OiBmaXZlRGF5XG4gICAgfVxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cblxuZnVuY3Rpb24gYWRkVG9ET00od2VhdGhlck9iaikge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm8nKTtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBwTG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHBGZWVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBwSHVtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcFdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyT2JqLmljb259LnBuZ2BcblxuICAgIHBMb2MudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLmxvY30sICR7cmVnaW9uTmFtZXMub2Yod2VhdGhlck9iai5jb3VudHJ5KX1gO1xuICAgIHBUZW1wLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3dlYXRoZXJPYmoudGVtcH3CsEMgKCR7Z2V0QnVyZ2VyVGVtcGVyYXR1cmUod2VhdGhlck9iai50ZW1wKX3CsEYpYDtcbiAgICBwRmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt3ZWF0aGVyT2JqLmZlZWxzTGlrZX3CsEMgKCR7Z2V0QnVyZ2VyVGVtcGVyYXR1cmUod2VhdGhlck9iai5mZWVsc0xpa2UpfcKwRilgO1xuICAgIHBEZXNjLnRleHRDb250ZW50ID0gYFdlYXRoZXI6ICR7d2VhdGhlck9iai5kZXNjfWA7XG4gICAgcEh1bWlkLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke3dlYXRoZXJPYmouaHVtaWRpdHl9JWA7XG4gICAgcFdpbmQudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZDogJHt3ZWF0aGVyT2JqLndpbmRTcGVlZH0gbS9zICgke2dldEJ1cmdlclNwZWVkKHdlYXRoZXJPYmoud2luZFNwZWVkKX0gZnQvcylgO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBMb2MpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwVGVtcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBGZWVscyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBEZXNjKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocEh1bWlkKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFdpbmQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnVyZ2VyVGVtcGVyYXR1cmUodGVtcENlbCkge1xuICAgIHZhciB0ZW1wID0gcGFyc2VGbG9hdCh0ZW1wQ2VsKTtcbiAgICByZXR1cm4gdGVtcCAqIDkgLyA1ICsgMzI7XG59XG5cbmZ1bmN0aW9uIGdldEJ1cmdlclNwZWVkKHNwZWVkTVMpIHtcbiAgICB2YXIgc3BlZWQgPSBwYXJzZUZsb2F0KHNwZWVkTVMpO1xuICAgIHJldHVybiBzcGVlZCAqIDMuMjgwODQ7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHdlYXRoZXJMb2FkKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgYWRkVG9ET00oZGF0YSk7XG4gICAgICAgIGFkZEZvcmVjYXN0KGRhdGEpO1xuICAgIH0pO1xufSlcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbnB1dCcpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBpbnB1dC52YWx1ZTtcbiAgICBzZWFyY2hXZWF0aGVyKHVzZXJJbnB1dCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgYWRkVG9ET00oZGF0YSk7XG4gICAgICAgIGFkZEZvcmVjYXN0KGRhdGEpO1xuICAgIH0pO1xufSkiXSwibmFtZXMiOlsicmVnaW9uTmFtZXMiLCJJbnRsIiwiRGlzcGxheU5hbWVzIiwidHlwZSIsImdldFBvcyIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImFwaUNhbGwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZldGNoIiwibW9kZSIsImFwaVNlYXJjaCIsImxvYyIsIndlYXRoZXJMb2FkIiwidXNlclBvcyIsInVzZXJMYXQiLCJjb29yZHMiLCJ1c2VyTG9uZyIsInVzZXJBUEkiLCJ1c2VySlNPTiIsImpzb24iLCJ1c2VyRm9yZWNhc3QiLCJ3ZWF0aGVyTG9hZEZvcmVjYXN0IiwidXNlckZvcmVjYXN0SlNPTiIsImZpdmVEYXkiLCJsaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJkdF90eHQiLCJpbmNsdWRlcyIsInB1c2giLCJ1c2VyV2VhdGhlckRhdGEiLCJuYW1lIiwiY291bnRyeSIsInN5cyIsInRlbXAiLCJtYWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImRlc2MiLCJ3ZWF0aGVyIiwiZGVzY3JpcHRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaHVtaWRpdHkiLCJ3aW5kU3BlZWQiLCJ3aW5kIiwic3BlZWQiLCJpY29uIiwiZm9yZWNhc3QiLCJhZGRGb3JlY2FzdCIsIndlYXRoZXJPYmoiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJ0ZXh0Q29udGVudCIsImRhdGUiLCJzcGxpdCIsIm5ld0RhdGUiLCJEYXRlIiwidG9EYXRlU3RyaW5nIiwiZm9yZWNhc3RDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZkRhdGUiLCJzcmMiLCJmVGVtcCIsImZEZXNjIiwiYXBwZW5kQ2hpbGQiLCJ3ZWF0aGVyU2VhcmNoRm9yZWNhc3QiLCJzZWFyY2hXZWF0aGVyIiwibG9jYXRpb24iLCJ3ZWF0aGVyU2VhcmNoIiwid2VhdGhlckpTT04iLCJ3ZWF0aGVyRm9yZWNhc3QiLCJ3ZWF0aGVyRm9yZWNhc3RKU09OIiwid2VhdGhlckRhdGEiLCJhZGRUb0RPTSIsInBMb2MiLCJwVGVtcCIsInBGZWVscyIsInBEZXNjIiwicEh1bWlkIiwicFdpbmQiLCJvZiIsImdldEJ1cmdlclRlbXBlcmF0dXJlIiwiZ2V0QnVyZ2VyU3BlZWQiLCJ0ZW1wQ2VsIiwicGFyc2VGbG9hdCIsInNwZWVkTVMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGhlbiIsImRhdGEiLCJpbnB1dCIsInN1Ym1pdEJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==