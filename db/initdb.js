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

async function initializeCategories() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      category VARCHAR(255) UNIQUE NOT NULL
    );
  `);

  const { rows } = await pool.query("SELECT COUNT(*) FROM categories;");
  const count = parseInt(rows[0].count);

  if (count === 0) {
    console.log("Inserting default categories...");
    const defaultCats = [
      "Learning",
      "Culture",
      "Community",
      "Immersion",
      "Resources"
    ];

    for (const cat of defaultCats) {
      await pool.query("INSERT INTO categories (category) VALUES ($1)", [cat]);
    }
  } else {
    console.log("Categories already exist in database.");
  }
}

async function initializeResources() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      type VARCHAR(255) NOT NULL,
      subcategory VARCHAR(255) NOT NULL,
      platform VARCHAR(255) NOT NULL,
      free BOOLEAN,
      option VARCHAR(255),
      description TEXT,
      image TEXT,
      link TEXT
    );
  `);

  const { rows } = await pool.query("SELECT COUNT(*) FROM resources;");
  const count = parseInt(rows[0].count);

  if (count === 0) {
    console.log("Inserting default resources...");

    const defaultRes = [
      // LEARNING
      { category: "Learning", type: "E-Learning", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Duolingo" },
      { category: "Learning", type: "E-Learning", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Babbel" },
      { category: "Learning", type: "E-Learning", subcategory: "App", platform: "All", name: "LingQ" },
      { category: "Learning", type: "Tools", subcategory: "IA", platform: "All", name: "ChatGPT" },
      { category: "Learning", type: "Tools", subcategory: "IA", platform: "Web", name: "DeepL Write" },
      { category: "Learning", type: "Tools", subcategory: "IA", platform: "Web", name: "Grammarly" },
      { category: "Learning", type: "Tools", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Anki" },
      { category: "Learning", type: "Tools", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Memrise" },
      { category: "Learning", type: "E-Learning", subcategory: "Platform", platform: "All", name: "Speechling" },
      { category: "Learning", type: "E-Learning", subcategory: "Platform", platform: "Web", name: "LangCorrect" },

      // COMMUNITY
      { category: "Community", type: "Exchange", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Italki" },
      { category: "Community", type: "Exchange", subcategory: "App", platform: "Mobile (iOS/Android)", name: "HelloTalk" },
      { category: "Community", type: "Exchange", subcategory: "App", platform: "Mobile (iOS/Android)", name: "Tandem" },
      { category: "Community", type: "Forums", subcategory: "App", platform: "All", name: "Reddit" },
      { category: "Community", type: "Discords", subcategory: "App", platform: "All", name: "Discord" },

      // CULTURE
      { category: "Culture", type: "Books", subcategory: "", platform: "", name: "" },
      { category: "Culture", type: "Movies", subcategory: "", platform: "", name: "" },
      { category: "Culture", type: "Podcasts", subcategory: "", platform: "", name: "TED Talks" },
      { category: "Culture", type: "E-Resources", subcategory: "Platform", platform: "All", name: "Wikibooks" },

      // IMMERSION
      { category: "Immersion", type: "Tool", subcategory: "Extension", platform: "Chrome / Firefox", name: "Language Reactor" },
      { category: "Immersion", type: "Tool", subcategory: "Extension", platform: "Chrome / Firefox", name: "Toucan" },
      { category: "Immersion", type: "Tool", subcategory: "Extension", platform: "VLC", name: "VLC" },
      { category: "Immersion", type: "E-Resources", subcategory: "Platform", platform: "All", name: "Wikinews" }
    ];

    for (const res of defaultRes) {
      await pool.query(
        `INSERT INTO resources (name, category, type, subcategory, platform)
         VALUES ($1, $2, $3, $4, $5)`,
        [res.name, res.category, res.type, res.subcategory, res.platform]
      );
    }

    console.log("Default resources inserted successfully!");
  } else {
    console.log("Resources already exist in database.");
  }
}


module.exports = {
  initializeLanguages,
  initializeCategories,
  initializeResources
};
