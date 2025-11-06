const { Router } = require("express");
const router = Router();
const updateController = require("../controllers/updateController");

//UPDATE SECTION
//Languages
router.get("/languages/add", updateController.getLanguageForm);
router.post("/languages/add", updateController.addLanguage);
router.post("/languages/delete/:id", updateController.deleteLanguage);


//Categories
router.get("/categories/add", updateController.getCategoryForm);
router.post("/categories/add", updateController.addCategory);
router.post("/categories/delete/:id", updateController.deleteCategory);

module.exports = router;