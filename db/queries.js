//queries.js
const pool = require("./pool");

async function getAllLanguages() {
    const { rows} = await pool.query("SELECT * FROM languages");
    return rows; 
}


async function addLanguage(name) {
    await pool.query(
        "INSERT INTO languages (language) VALUES ($1)",
        [name]
      );
}

async function deleteLanguage(id) {
    const { rows} = await pool.query("DELETE FROM languages WHERE id = $1 RETURNING *", [id])
    return rows;
}

async function getAllCategories() {
    const { rows} = await pool.query("SELECT * FROM categories");
    return rows; 
}


async function addCategory(name) {
    await pool.query(
        "INSERT INTO categories (category) VALUES ($1)",
        [name]
      );
}

async function deleteCategory(id) {
    const { rows} = await pool.query("DELETE FROM categories WHERE id = $1 RETURNING *", [id])
    return rows;
}

module.exports = {
    getAllLanguages, 
    addLanguage,
    deleteLanguage,

    getAllCategories,
    addCategory,
    deleteCategory
}