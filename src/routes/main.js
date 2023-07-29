const main = (req, res) => {
  res.sendFile(`${process.cwd()}/src/public/index.html`);
};

module.exports = { main };
