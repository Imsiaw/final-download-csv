const express = require("express");
const { main } = require("./main.js");
const { getCsv } = require("./getCsv.js");
const { lastUpdate } = require("./lastUpdate.js");
const { checkCsv } = require("./checkCsv.js");
const { updateCsv } = require("./updateCsv.js");

const Router = express.Router();

Router.get("/", main);
Router.get("/csv", getCsv);
Router.get("/last-update", lastUpdate);
Router.get("/check-csv", checkCsv);
Router.get("/update-csv", updateCsv);

module.exports = { Router };
