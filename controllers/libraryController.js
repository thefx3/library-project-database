//libraryController.js
const db = require("../db/queries");

async function homePage(req, res){
    const languages = await db.getAllLanguages();
    res.render("home", { languages });
};

async function globalPage (req, res){
    res.render("global");
}

async function updateLanguages (req, res){
    const languages = await db.getAllLanguages();
    res.render("update", { languages });
}

module.exports = {
    homePage, 
    globalPage, 
    updateLanguages
};