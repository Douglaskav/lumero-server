const express = require("express");
const router = require("./routes");
require("./database/index");
const cors = require("cors");

const app = express();

app.use(cors("*"));
app.use(express.json());
app.use(router);

process.on("uncaughtException", (err) => {
	console.error("There was an uncaught error", err);
});

app.set("port", process.env.PORT || 3333);

module.exports = app;
