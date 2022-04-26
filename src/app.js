const express = require("express");
const router = require("./routes");
require("./database/index");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors("*"));
app.use(express.json());
app.use(router);

app.set("port", process.env.PORT || 3333);

module.exports = app;
