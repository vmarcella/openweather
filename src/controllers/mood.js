const Mood = require("../models/mood");

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
    const mood = await Mood.findById(req.params.id);
    return res.json({ status: "OK", mood });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

module.exports.getMoodByCity = async (req, res) => {
  try {
    const moods = await Mood.find({ city: req.params.city });
    return res.json({ status: "OK", moods });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};

module.exports.postMood = async (req, res) => {
  try {
    const createdMood = await Mood.create(req.body);
    return res.json({ status: "OK", createdMood });
  } catch (err) {
    return res.status(500).json({ status: "FAILED", msg: err.message });
  }
};
