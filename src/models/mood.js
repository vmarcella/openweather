const { Schema, model } = require("mongoose");

// Schema for storing the mood of people about the weather
const moodSchema = new Schema({
  mood: String,
  city: String,
  weatherData: Object,
});

module.exports = model("Mood", moodSchema);
