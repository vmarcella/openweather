const router = require("express").Router();
const controller = require("../controllers/mood");

// Routes and controllers for the
router.get("/", controller.getMoods);
router.get("/city", controller.getMoodsByCity);
router.get("/:moodId", controller.getMood);
router.post("/", controller.postMood);

module.exports = router;
