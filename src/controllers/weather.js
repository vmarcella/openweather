const weather = require("../lib/weather");

/**
 * @function
 * @desc Get the weather by city name through the query parameters
 * @param req - The express Request context
 * @param res - The express Response context
 * @return A JSON response
 * @example
 * GET /api/v1/weather/city?city=San Francisco&country=us -> {SF weather data}
 */
module.exports.getWeatherByCity = async (req, res) => {
  try {
    if (!req.query.city) {
      return res
        .status(422)
        .json({ status: "FAILED", msg: "City not provided as a query param" });
    }
    const weatherData = await weather.getWeatherByName(
      req.query.city,
      req.query.country ? req.query.country : "us",
    );
    return res.json({ status: "OK", weather: weatherData });
  } catch (err) {
    return res.status(err.status).json({
      status: "FAILED",
      msg: err.message,
    });
  }
};

/**
 * @function
 * @desc Get the weather by id through the query parameter: id
 * @param req - The express Request context
 * @param res - The express Response context
 * @return A JSON response
 * @example
 * GET /api/v1/weather/id?id=5391959 -> {SF weather data}
 */
module.exports.getWeatherByID = async (req, res) => {
  try {
    if (!req.query.id) {
      return res
        .status(422)
        .json({ status: "FAILED", msg: "ID not provided as a query param" });
    }
    const weatherData = await weather.getWeatherById(req.query.id);
    return res.json({ status: "OK", weather: weatherData });
  } catch (err) {
    return res.status(err.status).json({
      status: "FAILED",
      msg: err.message,
    });
  }
};

/**
 * @function
 * @desc Get the weather by city name
 * @param req - The express Request context
 * @param res - The express Response context
 * @return A JSON response
 * @example
 * GET /api/v1/weather/zip?zip=94102&country=us -> {SF weather data}
 */
module.exports.getWeatherByZipCode = async (req, res) => {
  try {
    if (!req.query.zip) {
      return res.status(422).json({
        status: "FAILED",
        msg: "zip code not provided as a query param",
      });
    }
    // Get the weather data
    const weatherData = await weather.getWeatherByZip(
      req.query.zip,
      req.query.country ? req.query.country : "us",
    );
    return res.json({ status: "OK", weather: weatherData });
  } catch (err) {
    return res.status(err.status || 500).json({
      status: "FAILED",
      msg: err.message,
    });
  }
};
