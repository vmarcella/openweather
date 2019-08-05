const Mood = require("../models/mood");
const weather = require("../lib/weather");

/**
 * @function
 * @desc Get all the moods ever stored on the server
 * @param req - The Express request context
 * @param res - The Express response context
 * @return {Object} - All of the stored mood data about cities
 * @example
 * GET /api/v1/moods -> {Mood object}
 */
module.exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find();
    return res.json({ status: "OK", moods });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

/**
 * @function
 * @desc Get all the moods ever stored on the server
 * @param req - The Express request context
 * @param res - The Express response context
 * @return {Object} - The mood object for the requested mood object
 * @example
 * GET /api/v1/mood/:moodId -> {Mood object}
 */
module.exports.getMood = async (req, res) => {
  try {
    const mood = await Mood.findById(req.params.moodId);
    return res.json({ status: "OK", mood });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

/**
 * @function
 * @desc Get all the moods ever stored on the server
 * @param req - The Express request context
 * @param res - The Express response context
 * @return {Object} - the mood of an object for a particular city
 * @example
 * GET /api/v1/moods/city?city=San Francisco -> [{List of mood objects}]
 */
module.exports.getMoodsByCity = async (req, res) => {
  if (!req.query.city) {
    return res.status(422).json({
      status: "FAILED",
      msg: "You didn't provide the query string for the city",
    });
  }
  try {
    const moods = await Mood.find({ city: new RegExp(req.query.city, "i") });
    return res.json({ status: "OK", moods });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

/**
 * @function
 * @desc Send a mood about a city to the server
 * @param req - The Express request context
 * @param res - The Express response context
 * @return {Object} - The created mood object with information about the weather
 * @example
 * POST /api/v1/moods?city=San Francisco { mood: "Happy"} -> {Mood object}
 */
module.exports.postMood = async (req, res) => {
  // user entered
  if (!req.query.city) {
    return res.status(422).json({
      status: "FAILED",
      msg: "You didn't provide the query string for the city",
    });
  }

  // User entered incorrect data
  if (!req.body.mood || !(typeof req.body.mood === "string")) {
    return res.status(403).json({
      status: "FAILED",
      msg:
        "You either didn't provide your mood or provided it as something other than a string",
    });
  }

  try {
    const weatherData = await weather.getWeatherByName(req.query.city);

    const mood = {
      mood: req.body.mood,
      city: req.query.city,
      weather: weatherData,
    };
    const createdMood = await Mood.create(mood);
    return res.json({ status: "OK", mood: createdMood });
  } catch (err) {
    return res
      .status(err.status || 500)
      .json({ status: "FAILED", msg: err.message });
  }
};
