const weather = require("../lib/weather");

const processQueryStrings = (queryString) => {};

module.exports.getWeatherByCity = async (req, res) => {
  try {
    if (!req.query.city) {
      res.json({ status: "FAILED", msg: "City not provided as a query param" });
    }
    await weather.getWeatherByName(req.query.city);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "INTERNAL ERROR",
      msg: "Endpoint could not be accessed",
    });
  }
};
module.exports.getWeatherByZipCode = (req, res) => {};
module.exports.getWeatherByCoordinates = (req, res) => {};
