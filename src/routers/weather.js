const router = require("express").Router();
const controller = require("../controllers/weather");

// the routes for the weather api
router.get("/city", controller.getWeatherByCity);
router.get("/id", controller.getWeatherByID);
router.get("/zip", controller.getWeatherByZipCode);


module.exports = router;
