const fs = require("fs");
const axios = require("axios");
const { config } = require("./config/index.js");

const { CSV_PATH, CSV_UPDATE_PATH } = config;

fs.unlink(CSV_UPDATE_PATH, (err) => {
  console.log(err);
  const url =
    "https://nc-aftermarket-www-production.s3.amazonaws.com/reports/Namecheap_Market_Sales.csv";
  const writer = fs.createWriteStream(CSV_UPDATE_PATH);
  console.log("Updating Csv File...");
  axios({
    url,
    method: "GET",
    responseType: "stream",
  })
    .then((resp) => {
      console.log("Response Reached... \nStart Downloading");
      resp.data.pipe(writer);
    })
    .catch((err) => {
      console.error(err);
    });
  writer.on("finish", () => {
    fs.rename(CSV_UPDATE_PATH, CSV_PATH, (_error) => {
      if (_error) {
        console.error(`Error : ${_error}`);
        return;
      }
      console.log("Finish.");
    });
  });
});
