//libraryController.js
const db = require("../db/queries");

//Page Home - To display all languages
async function homePage(req, res){
    const languages = await db.getAllLanguages();
    res.render("home", { languages });
};

//ROUTE 1 - To display all categories
async function globalPage (req, res){
    const categories = await db.getAllCategories();
    res.render("global", { categories });
}

//Route 1.1 - To display all resources for a selected category


//Route 1.2 - Button to updates categories
async function updateCategories (req, res){
    const categories = await db.getAllCategories();
    res.render("updatecat", { categories });
}

//Route 1.3 - To display all items for all categories
async function getResourcesFiltered (req, res){
    const { filtertype } = req.params;
    console.log("Filter type received:", filtertype);

    const resources = await db.getResourcesFiltered(filtertype);
    res.render("filteredView", { resources });
}


//ROUTE 2 - To display all categories for a selected language


//ROUTE 3 - Buttons to update languages
async function updateLanguages (req, res){
    const languages = await db.getAllLanguages();
    res.render("updatelang", { languages });
}



module.exports = {
    homePage, 
    globalPage, 
    updateLanguages,
    updateCategories,
    getResourcesFiltered
};