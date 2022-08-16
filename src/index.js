import './styles/main.scss';

function getPos() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    })
}

function apiCall(latitude, longitude) {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`);
}

function apiSearch(loc) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=31d60ae22906002464e0e7f4ef608bc5`)
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
        desc: weatherJSON.weather[0].description,
        humidity: weatherJSON.main.humidity,
        windSpeed: weatherJSON.wind.speed
    }
    return weatherData;
}

weatherLoad();
searchWeather('Tallinn');

