import './styles/main.scss';

let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

function getPos() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    })
}

function apiCall(latitude, longitude) {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'});
}

function apiSearch(loc) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'})
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
    })
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
    }
    return userWeatherData;
}

function addForecast(weatherObj) {
    const main = document.querySelector('.main');
    const container = document.querySelector('.forecast');
    container.textContent = '';
    weatherObj.forecast.forEach(item => {
        const date = item.dt_txt.split(' ');
        const newDate = new Date(date).toLocaleDateString();
        const forecastContainer = document.createElement('div');
        const fDate = document.createElement('p');
        const icon = document.createElement('img');
        icon.src =  `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
        const fTemp = document.createElement('p');
        const fDesc = document.createElement('p');

        fDate.textContent = newDate;
        fTemp.textContent = `${Math.round(item.main.temp)}°C`;
        fDesc.textContent = `${item.weather[0].description.charAt(0).toUpperCase() + item.weather[0].description.slice(1)}`;

        forecastContainer.appendChild(fDate);
        forecastContainer.appendChild(icon);
        forecastContainer.appendChild(fTemp);
        forecastContainer.appendChild(fDesc);
        container.appendChild(forecastContainer);
    });

    main.appendChild(container);
}

function weatherLoadForecast(latitude, longitude) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'});
}

function weatherSearchForecast(loc) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'});
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
    })
    const weatherData = {
        loc: weatherJSON.name,
        country: weatherJSON.sys.country,
        temp: Math.round((weatherJSON.main.temp * 10) / 10),
        feelsLike: weatherJSON.main.feels_like,
        desc: weatherJSON.weather[0].description.charAt(0).toUpperCase() + weatherJSON.weather[0].description.slice(1),
        humidity: weatherJSON.main.humidity,
        windSpeed: weatherJSON.wind.speed,
        icon: weatherJSON.weather[0].icon,
        forecast: fiveDay
    }
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

    icon.src = `https://openweathermap.org/img/wn/${weatherObj.icon}.png`

    pLoc.textContent = `${weatherObj.loc}, ${regionNames.of(weatherObj.country)}`;
    pTemp.textContent = `Temperature: ${Math.round(weatherObj.temp)}°C (${getBurgerTemperature(weatherObj.temp)}°F)`;
    pFeels.textContent = `Feels like: ${Math.round(weatherObj.feelsLike)}°C (${getBurgerTemperature(weatherObj.feelsLike)}°F)`;
    pDesc.textContent = `Weather: ${weatherObj.desc}`;
    pHumid.textContent = `Humidity: ${weatherObj.humidity}%`;
    pWind.textContent = `Wind speed: ${weatherObj.windSpeed} m/s (${getBurgerSpeed(weatherObj.windSpeed)} ft/s)`;

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
    return Math.round(temp * 9 / 5 + 32);
}

function getBurgerSpeed(speedMS) {
    var speed = parseFloat(speedMS);
    return Math.round(speed * 3.28084);
}

window.addEventListener('load', () => {
    weatherLoad().then(data => {
        addToDOM(data);
        addForecast(data);
    });
})

const input = document.querySelector('.weather-input');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = input.value;
    searchWeather(userInput).then(data => {
        addToDOM(data);
        addForecast(data);
    });
})