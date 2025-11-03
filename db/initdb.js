// db/init.js
const pool = require("./pool");

async function initializeLanguages() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS languages (
      id SERIAL PRIMARY KEY,
      language VARCHAR(255) UNIQUE NOT NULL
    );
  `);

  const { rows } = await pool.query("SELECT COUNT(*) FROM languages;");
  const count = parseInt(rows[0].count);

  if (count === 0) {
    console.log("Inserting default languages...");
    const defaultLangs = [
      "French",
      "English",
      "Spanish",
      "Italian",
      "Portuguese",
      "German"
    ];

    for (const lang of defaultLangs) {
      await pool.query("INSERT INTO languages (language) VALUES ($1)", [lang]);
    }
  } else {
    console.log("Languages already exist in database.");
  }
}

module.exports = initializeLanguages;
