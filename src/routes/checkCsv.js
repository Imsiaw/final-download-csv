const fs = require("fs");
const { config } = require("../config/index.js");

const checkCsv = async (req, res) => {
  const { CSV_PATH } = config;
  try {
    const isExist = fs.existsSync(CSV_PATH);
    res.json({ isExist, error: false, message: "" });
  } catch (err) {
    res.json({ error: true, message: err.message, data: null });
  }
};

module.exports = { checkCsv };
