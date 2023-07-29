// const fsPromisify = require("fs/promises");
const fs = require("fs");
const { config } = require("../config/index.js");

const lastUpdate = async (req, res) => {
  const { CSV_PATH } = config;
  try {
    fs.stat(CSV_PATH, (err, stats) => {
      res.json({ lastModified: stats.mtime, error: false, message: "" });
    });
    // const stats = await fsPromisify.stat(CSV_PATH);
  } catch (err) {
    res.json({ error: true, message: err.message, data: null });
  }
};

module.exports = { lastUpdate };
