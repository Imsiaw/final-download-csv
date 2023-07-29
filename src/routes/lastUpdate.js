const fsPromisify = require("fs/promises");
const { config } = require("../config/index.js");

const lastUpdate = async (req, res) => {
  const { CSV_PATH } = config;
  try {
    const stats = await fsPromisify.stat(CSV_PATH);
    res.json({ lastModified: stats.mtime, error: false, message: "" });
  } catch (err) {
    res.json({ error: true, message: err.message, data: null });
  }
};

module.exports = { lastUpdate };
