const { Router } = require("express");
const router = Router();
const updateController = require("../controllers/updateController");
const libraryController = require("../controllers/libraryController");

router.get("/update/categories", libraryController.updateCategories); //Route 1

router.get("/categories/add", updateController.getCategoryForm);
router.post("/categories/add", updateController.addCategory);
router.post("/categories/delete/:id", updateController.deleteCategory);



module.exports = router;