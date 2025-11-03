const { Router } = require("express");
const router = Router();
const libraryController = require("../controllers/libraryController");

router.get("/", libraryController.homePage);

module.exports = router;