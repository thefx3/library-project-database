const { Router } = require("express");
const router = Router();
const updateController = require("../controllers/updateController");

router.get("/languages/add", updateController.getLanguageForm);
router.post("/languages/add", updateController.addLanguage);

router.post("/languages/delete/:id", updateController.deleteLanguage);

module.exports = router;