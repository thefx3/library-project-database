//libraryController.js
const db = require("../db/queries");

async function homePage(req, res){
    const languages = await db.getAllLanguages();
    res.render("home", { languages });
};

async function globalPage (req, res){
    const categories = await db.getAllCategories();
    res.render("global", { categories });
}

async function updateLanguages (req, res){
    const languages = await db.getAllLanguages();
    res.render("updatelang", { languages });
}

async function updateCategories (req, res){
    const categories = await db.getAllCategories();
    res.render("updatecat", { categories });
}
module.exports = {
    homePage, 
    globalPage, 
    updateLanguages,
    updateCategories
};