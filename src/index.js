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
    const userWeatherData = {
        loc: userJSON.name,
        country: userJSON.sys.country,
        temp: userJSON.main.temp,
        feelsLike: userJSON.main.feels_like,
        desc: userJSON.weather[0].description.charAt(0).toUpperCase() + userJSON.weather[0].description.slice(1),
        humidity: userJSON.main.humidity,
        windSpeed: userJSON.wind.speed
    }
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
    }
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
    const pWind= document.createElement('p');

    pLoc.textContent = `${weatherObj.loc}, ${regionNames.of(weatherObj.country)}`;
    pTemp.textContent = `Temperature: ${weatherObj.temp}°C (${getBurgerTemperature(weatherObj.temp)}°F)`;
    pFeels.textContent = `Feels like: ${weatherObj.feelsLike}°C (${getBurgerTemperature(weatherObj.feelsLike)}°C)`;
    pDesc.textContent = `Weather: ${weatherObj.desc}`;
    pHumid.textContent = `Humidity: ${weatherObj.humidity}%`;
    pWind.textContent = `Wind speed: ${weatherObj.windSpeed} m/s (${getBurgerSpeed(weatherObj.windSpeed)} ft/s)`;

    container.appendChild(pLoc);
    container.appendChild(pTemp);
    container.appendChild(pFeels);
    container.appendChild(pDesc);
    container.appendChild(pHumid);
    container.appendChild(pWind);

    body.appendChild(container);
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
    weatherLoad().then(data => addToDOM(data));
})

const input = document.querySelector('.weather-input');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = input.value;
    searchWeather(userInput).then(data => addToDOM(data));
})
