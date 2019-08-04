const router = require("express").Router();

router.get("/");
router.get("/:moodId");

router.post("/");

module.exports = router;
