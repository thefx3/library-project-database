//app.js
require("dotenv").config();
console.log("Environment loaded:", process.env.DB_HOST, process.env.DB_DATABASE);

const express = require("express");
const app = express();
const path = require("node:path");
const { initializeLanguages, initializeCategories } = require("./db/initdb");
const indexRouter = require("./routes/indexRouter");
const updateRouter = require("./routes/updateRouter");
const globalRouter = require("./routes/globalRouter");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/", updateRouter);
app.use("/", globalRouter);


const PORT = 3000;
(async () => {
  try {
    await initializeLanguages();
    await initializeCategories();
    app.listen(PORT, () => {
      console.log(`✅ App listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Database initialization failed:", err);
  }
})();

app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
  });
  