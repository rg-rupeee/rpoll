const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(morgan("dev"));

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);

module.exports = app;
