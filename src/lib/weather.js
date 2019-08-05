const axios = require("axios");

const appID = process.env.OPENWEATHER_KEY;
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`;

/**
 * @function
 * @desc Contact the openweather api to get weather data
 * @param {String} url- The endpoint url with query strings attached to make a request to.
 * @return {Object} the weather object containing weather data about the particular
 * area.
 */
const handleRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    const errData = err.response.data;
    const customErr = new Error(errData.message);

    // Handle errors sent to the server
    switch (err.response.status) {
      case 404:
        customErr.status = 404;
        throw customErr;
      default:
        customErr.status = 500;
        throw customErr;
    }
  }
};

/**
 * @function
 * @desc Get the weather by the city name and the country
 * @param {String} cityName- The zip code for the city
 * @param {String} country - The country for the city
 * @return {Object} the weather object containing weather data about the particular
 * area.
 * @example
 * weather.getWeatherByName("San Francisco", country="us") -> {SF weather data from OW}
 */
module.exports.getWeatherByName = async (cityName, country = "us") => {
  try {
    // Obtain the city data by name
    const query = `&q=${cityName},${country}`;
    return await handleRequest(ENDPOINT + query);
  } catch (err) {
    throw err;
  }
};

/**
 * @function
 * @desc Get the weather by the city ID
 * @param {String} cityID - The city ID for the city
 * @return {Object} the weather object containing weather data about the particular
 * area.
 * @example
 * weather.getWeatherById(cityId) -> {City ID weather from OW}
 */
module.exports.getWeatherById = async (cityID) => {
  try {
    // Obtain the city data by ID
    const query = `&id=${cityID}`;
    return await handleRequest(ENDPOINT + query);
  } catch (err) {
    throw err;
  }
};

/**
 * @function
 * @desc Get the weather by the zipcode and country
 * @param {String} zip - The zip code for the city
 * @param {String} country - The country for the city
 * @return {Object} the weather object containing weather data about the particular
 * area.
 * @example
 * weather.getWeatherByZip(94102, country='us') -> {SF weather data from OW}
 */
module.exports.getWeatherByZip = async (zip, country = "us") => {
  try {
    // Obtain the city data by name
    const query = `&zip=${zip},${country}`;
    return await handleRequest(ENDPOINT + query);
  } catch (err) {
    throw err;
  }
};
