const express = require("express");

const router = express.Router();

router.use("/v1/weather");
router.use("/v1/mood");

module.exports = router;
