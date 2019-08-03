const router = require("express").Router();
const controller = require("../controllers/weather");

router.get("/city", controller.getWeatherByCity);

module.exports = router;
