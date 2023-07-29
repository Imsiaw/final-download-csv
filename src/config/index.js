const config = {
  CSV_PATH: `${process.cwd()}/src/file/csvfile.csv`,
  CSV_UPDATE_PATH: `${process.cwd()}/src/file/updated.csv`,
  CSV_DOWNLOAD_URL:
    "https://nc-aftermarket-www-production.s3.amazonaws.com/reports/Namecheap_Market_Sales.csv",
  PORT: 3000,
};

module.exports = { config };
