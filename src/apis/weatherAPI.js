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
 * @description Obtain city name from specific geo-coordinates
 * @param {Number} lat
 * @param {Number} lon
 * @returns {String} City name
 */
export const getCityNameFromCoords = async (lat, lon) => {
    let cityName = null;
    try {
        // Construct specific URL
        const url = constructURL('weather', { lat: lat, lon: lon });

        // Fetch city name
        cityName = await fetch(url).then(res => res.json()).then(data => data.name);
    } catch (error) {}

    return cityName;
};

/**
 * @description Obtain coordinates of specific city
 * @param {String} currentCity
 * @returns {Object} Coordinates containing both Latitude and Longitude
 */
const getCurrentDetails = async (currentCity, degreeUnit) => {
    let weatherData = null;
    try {
        // Construct specific URL
        const url = constructURL('weather', { q: currentCity, units: degreeUnit })

        // Fetch weather data
        weatherData = await fetch(url).then(res => res.json()).then(data => data);
    } catch (error) {}

    const {
        coord,
        dt,
        main: { feels_like, humidity, temp, temp_min, temp_max },
        wind: { speed },
        sys: { sunrise, sunset, country },
        name,
        weather: [{ description , icon }],

    } = weatherData;

    return {
        coord,
        dt,
        feels_like,
        humidity,
        temp,
        temp_min,
        temp_max,
        speed,
        sunrise,
        sunset,
        country,
        name,
        description,
        icon
    };
};

/**
 * @description Obtain weather data of specific city
 * @param {String} currentCity
 * @returns {Object} Weather data
 */
export const getWeatherData = async (currentCity, degreeUnit) => {
    let fullWeatherData = null;
    try {
        // Obtain city coordinates
        const weatherData = await getCurrentDetails(currentCity, degreeUnit);

        // Exclude specific info while retrieving weather data
        const excludedParts = ['current', 'minutely', 'alerts'].join(',');

        // Construct specific URL
        const url = constructURL('onecall', { lat: weatherData.coord.lat, lon: weatherData.coord.lon, exclude: excludedParts, units: degreeUnit })

        // Fetch weather data
        const {
            timezone,
            hourly,
            daily,
        } = await fetch(url).then(res => res.json()).then(data => data);

        fullWeatherData = {...weatherData, timezone, hourly, daily };
    } catch (error) {}

    return fullWeatherData;
};
