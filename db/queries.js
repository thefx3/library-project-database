//queries.js
const pool = require("./pool");


//Languages
async function getAllLanguages() {
    const { rows } = await pool.query("SELECT * FROM languages");
    return rows; 
}


async function addLanguage(name) {
    await pool.query(
        "INSERT INTO languages (language) VALUES ($1)",
        [name]
      );
}

async function deleteLanguage(id) {
    const { rows } = await pool.query("DELETE FROM languages WHERE id = $1 RETURNING *", [id])
    return rows;
}

//Categories 
async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows; 
}

async function addCategory(name) {
    await pool.query(
        "INSERT INTO categories (category) VALUES ($1)",
        [name]
      );
}

async function deleteCategory(id) {
    const { rows } = await pool.query("DELETE FROM categories WHERE id = $1 RETURNING *", [id])
    return rows;
}

//Resources
async function getResourcesFiltered(filtertype) {
    if (filtertype === "all") {
        const { rows } = await pool.query("SELECT * FROM resources");
        return rows; 
    }
    const { rows } = await pool.query(
        "SELECT * FROM resources WHERE LOWER(category) = $1", 
        [filtertype]
    )
    return rows; 
 }

async function addResource(name, category, type, subcategory, platform, free, option, description, image, link) {
    await pool.query(
        "INSERT INTO resources (name, category, type, subcategory, platform, free, option, description, image, link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [name, category, type, subcategory, platform, free, option, description, image, link]
    )
}

async function editResource() {

}

async function deleteResource(id) {
    const { rows } = await pool.query("DELETE FROM resources WHERE id = $1 RETURNING *", [id])
    return rows;
}


module.exports = {
    getAllLanguages, 
    addLanguage,
    deleteLanguage,

    getAllCategories,
    addCategory,
    deleteCategory,

    getResourcesFiltered,
    addResource,
    editResource,
    deleteResource
}