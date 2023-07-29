const express = require("express");
const cors = require("cors");
require("rootpath")();
const dotenv = require("dotenv");
const { Router } = require("./src/routes/index.js");
// const { config } = require("./src/config/index.js");

dotenv.config();

const PORT = process.env.SERVER_PORT || 4001;

const app = express();
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);
app.use(express.static(`${process.cwd()}/src/public`));

app.use(Router);

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`));
