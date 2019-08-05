const router = require("express").Router();
const controller = require("../controllers/mood");

// Routes and controllers for the
router.get("/", controller.getMoods);
router.get("/:moodId", controller.getMood);
router.get("/city", controller.getMoodsByCity);
router.post("/", controller.postMood);

module.exports = router;
