// OpenWeatherMap API Key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || 'unknown-api';

// OpenWeatherMap Base URL
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * @description Construct url using desired parameters
 * @param {String} infoType
 * @param {Object} searchParams
 * @returns {URL} Constructed url
 */
const constructURL = (infoType='weather', searchParams={}) => {
    const url = new URL(`${BASE_URL}/${infoType}`);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return url;
};

/**
 * @description Obtain coordinates of specific city
 * @param {String} currentCity
 * @returns {Object} Coordinates containing both Latitude and Longitude
 */
const getCityCoordinates = async (currentCity) => {
    let weatherData = null;
    try {
        // Construct specific URL
        const url = constructURL('weather', { q: currentCity })

        // Fetch weather data
        weatherData = await fetch(url).then(res => res.json()).then(data => data);
    } catch (error) {}

    return weatherData.coord ?? null;
};

/**
 * @description Obtain weather data of specific city
 * @param {String} currentCity
 * @returns {Object} Weather data
 */
export const getWeatherData = async (currentCity, degreeUnit) => {
    let weatherData = null;
    try {
        // Obtain city coordinates
        const coords = await getCityCoordinates(currentCity);

        // Exclude specific info while retrieving weather data
        const excludedParts = ['minutely', 'alerts'].join(',');

        // Construct specific URL
        const url = constructURL('onecall', { lat: coords.lat, lon: coords.lon, exclude: excludedParts, units: degreeUnit })

        // Fetch weather data
        weatherData = await fetch(url).then(res => res.json()).then(data => data);
    } catch (error) {}

    return weatherData;
};
