const { Router } = require("express");
const router = Router();
const libraryController = require("../controllers/libraryController");

router.get("/", libraryController.homePage); //Home + display languages

//ROUTE 1
router.get("/global/categories", libraryController.globalPage);

//Route 1.1 
//router.get("/global/resources/:filtertype", libraryController.filteredResources);

// Route 1.2
router.get("/update/categories", libraryController.updateCategories);

//Route 1.3
router.get("/global/resources/:filtertype", libraryController.getResourcesFiltered);




//ROUTE 2
//router.get("/:language_id/categories", libraryController.selectedLanguage);


//ROUTE 3
router.get("/update/languages", libraryController.updateLanguages);






module.exports = router;