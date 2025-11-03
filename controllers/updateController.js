//updateController.js 
const db = require("../db/queries");

async function getLanguageForm (req, res){
    res.render("getFormLanguage");
}
async function addLanguage (req, res){
    const {language} = req.body;
    await db.addLanguage(language);
    const languages = await db.getAllLanguages();
    res.render("update", { languages});
}


async function deleteLanguage (req, res){
    const {id} = req.params;
    await db.deleteLanguage(id);
    const languages = await db.getAllLanguages();
    res.render("update", { languages });
}

module.exports = {
    getLanguageForm,
    addLanguage,
    deleteLanguage 
}