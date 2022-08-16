import './styles/main.scss';

function getPos() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    })
}

function apiCall(latitude, longitude) {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'});
}

function apiSearch(loc) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`, {mode: 'cors'})
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
    const pCountry = document.createElement('p');
    const pTemp = document.createElement('p');
    const pFeels = document.createElement('p');
    const pDesc = document.createElement('p');
    const pHumid = document.createElement('p');
    const pWind= document.createElement('p');

    pLoc.textContent = weatherObj.loc;
    pCountry.textContent = weatherObj.country;
    pTemp.textContent = `${weatherObj.temp}°C`;
    pFeels.textContent = `Feels like: ${weatherObj.feelsLike}°C`;
    pDesc.textContent = weatherObj.desc;
    pHumid.textContent = `Humidity: ${weatherObj.humidity}%`;
    pWind.textContent = `Wind speed: ${weatherObj.windSpeed} m/s`;

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
})

const input = document.querySelector('.weather-input');
const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = input.value;
    searchWeather(userInput).then(data => addToDOM(data));
})

