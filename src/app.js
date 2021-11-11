const express = require("express");
const router = require("./routes");
require("dotenv/config");
require("./database/index");

const app = express();

app.use(express.json());

app.use(router);

app.set("port", process.env.PORT || 3333);

module.exports = app;
