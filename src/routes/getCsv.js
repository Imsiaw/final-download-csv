const fs = require("fs");
const { config } = require("../config/index.js");
const csv = require("csv-parser");
const { extractSorts } = require("../utils/extractSorts.js");
const { extractFilters } = require("../utils/extractFilters.js");
const { filterCsv } = require("../utils/filterCsv.js");
const { sortCsv } = require("../utils/sortCsv.js");

const getCsv = (req, res) => {
  const { CSV_PATH } = config;
  const queries = req.query;

  const filter = extractFilters(queries);
  const sorts = extractSorts(queries);

  let csvData = [];
  console.log("Start Reading Csv Data");
  console.time("process");
  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on("data", (data) => {
      csvData.push(data);
    })
    .on("end", () => {
      console.log("Read Csv File Completely");
      console.log("Start Filtering Data");

      csvData = filterCsv(csvData, filter);

      console.log("Finish Filtering");
      console.log("Start Sorting Data");

      csvData = sortCsv(csvData, sorts);

      console.log("Finish Sorting\nSending To Client...");
      res.json({ error: false, message: "ok", data: csvData }).end();
      console.timeEnd("process");
    });
};

module.exports = { getCsv };
