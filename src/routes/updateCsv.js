const axios = require("axios");
const fs = require("fs");
const { updateLine } = require("../utils/updateLine.js");

const { config } = require("../config/index.js");

const updateCsv = async (req, res) => {
  const { CSV_DOWNLOAD_URL, CSV_PATH, CSV_UPDATE_PATH } = config;

  fs.unlink(CSV_UPDATE_PATH, (err) => {
    console.log(err);
    const writer = fs.createWriteStream(CSV_UPDATE_PATH);

    let responseFinished = false;

    res.on("close", () => {
      if (!responseFinished) {
        writer.destroy();
      }
    });

    axios({
      url: CSV_DOWNLOAD_URL,
      method: "GET",
      responseType: "stream",
    })
      .then((resp) => {
        const totalLen = resp.headers["content-length"];
        let downloadLen = 0;
        resp.data.on("data", (chunk) => {
          downloadLen += chunk.length;
          const progress = Math.round((downloadLen / totalLen) * 100);
          updateLine(`${progress}%`);
          if (!responseFinished) {
            res.write(JSON.stringify({ progress }));
          }
        });
        resp.data.pipe(writer);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error");
      });
    writer.on("finish", () => {
      fs.rename(CSV_UPDATE_PATH, CSV_PATH, (_error) => {
        if (_error) {
          console.error(_error);
        }
        if (!responseFinished) {
          res.end("Download finish");
        }
      });
    });
    res.on("finish", () => {
      responseFinished = true;
    });
  });
  // await fsPromisify.unlink(CSV_UPDATE_PATH);
};

module.exports = { updateCsv };
