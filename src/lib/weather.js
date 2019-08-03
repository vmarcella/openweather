const axios = require("axios");

const appID = process.env.OPENWEATHER_KEY;
console.log(appID);
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`;

module.exports.getWeatherByName = async (cityName) => {
  const query = `&q=${cityName}`;
  const response = await axios.get(ENDPOINT + query);
  console.log(response);
};

module.exports.getWeatherById = async (cityID) => {
  const query = `&id=${cityID}`;
  const response = await axios.get(ENDPOINT + query);
  console.log(response);
};
