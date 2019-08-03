const router = require("express").Router();

const weatherRouter = require("./weather");
const moodRouter = require("./mood");

router.use("/v1/weather", weatherRouter);
router.use("/v1/mood", moodRouter);

module.exports = router;
