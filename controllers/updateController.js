//updateController.js 
const db = require("../db/queries");

//UPDATE LANGUAGES
async function getLanguageForm (req, res){
    res.render("getFormLanguage");
}
async function addLanguage (req, res){
    const {language} = req.body;
    await db.addLanguage(language);
    const languages = await db.getAllLanguages();
    res.render("updatelang", { languages});
}

async function deleteLanguage (req, res){
    const {id} = req.params;
    await db.deleteLanguage(id);
    const languages = await db.getAllLanguages();
    res.render("updatelang", { languages });
}

//UPDATE CATEGORIES
async function getCategoryForm (req, res){
    res.render("getFormCategory");
}

async function addCategory (req, res){
    const {category} = req.body;
    await db.addCategory(category);
    const categories = await db.getAllCategories();
    res.render("updatecat", { categories});
}

async function deleteCategory (req, res){
    const {id} = req.params;
    await db.deleteCategory(id);
    const categories = await db.getAllCategories();
    res.render("updatecat", { categories });
}

async function addResource(req, res){
    const {name, category, type, subcategory, platform, free, option, description, image, link} = req.body;
    await db.addResource(name, category, type, subcategory, platform, free, option, description, image, link);
    res.redirect("/"); // Redirect to home or another appropriate page after adding the resource
}

module.exports = {
    getLanguageForm,
    addLanguage,
    deleteLanguage,
    getCategoryForm,
    addCategory,
    deleteCategory,
    addResource
}