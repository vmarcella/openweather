const Mood = require("../models/mood");
const weather = require("../lib/weather");
/**
 * @function
 * @desc Get all the moods ever stored on the server
 * @param req - The Express request context
 * @param res - The Express response context
 * @return {Object} - All of the stored mood data about cities
 * @example
 * GET /api/v1/moods
 */
module.exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find();
    return res.json({ status: "OK", moods });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

module.exports.getMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.param.id);
    return res.json({ status: "OK", mood });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

module.exports.getMoodsByCity = async (req, res) => {
  if (!req.query.city) {
    return res.status(422).json({
      status: "FAILED",
      msg: "You didn't provide the query string for the city",
    });
  }
  try {
    const moods = await Mood.find({ city: req.params.city });
    return res.json({ status: "OK", moods });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

module.exports.postMood = async (req, res) => {
  // user entered
  if (!req.query.city) {
    return res.status(422).json({
      status: "FAILED",
      msg: "You didn't provide the query string for the city",
    });
  }

  // User entered incorrect data
  if (!req.body.mood || !(req.body.mood instanceof String)) {
    return res.status(403).json({
      status: "FAILED",
      msg:
        "You either didn't provide your mood or provided it as something other than a string",
    });
  }

  try {
    const weatherData = weather.getWeatherByName(req.query.city);

    const mood = { mood: req.body.mood, weather: weatherData };
    const createdMood = await Mood.create(mood);
    return res.json({ status: "OK", createdMood });
  } catch (err) {
    return res
      .status(err.status || 500)
      .json({ status: "FAILED", msg: err.message });
  }
};
