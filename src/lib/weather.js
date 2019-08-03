const axios = require("axios");

const appID = process.env.OPENWEATHER_KEY;
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`;

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

module.exports.getWeatherByName = async (cityName) => {
  try {
    // Obtain the city data by name
    const query = `&q=${cityName}`;
    return await handleRequest(ENDPOINT + query);
  } catch (err) {
    throw err;
  }
};

module.exports.getWeatherById = async (cityID) => {
  const query = `&id=${cityID}`;
  const response = await axios.get(ENDPOINT + query);
  console.log(response);
};
