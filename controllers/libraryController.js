//libraryController.js
const db = require("../db/queries");

async function homePage(req, res){
    res.render("home");
  };


module.exports = {
    homePage
};