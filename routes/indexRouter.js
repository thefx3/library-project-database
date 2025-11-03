const { Router } = require("express");
const router = Router();
const libraryController = require("../controllers/libraryController");

router.get("/", libraryController.homePage); //Home
router.get("/global/categories", libraryController.globalPage); //Route 1
//router.get("/language", libraryController.selectedLanguage); //Route 2
router.get("/update/languages", libraryController.updateLanguages); //Route 3




module.exports = router;