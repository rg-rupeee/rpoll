const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// view engine
app.set("view engine", "pug");
app.set("views", "./views");

app.use(morgan("dev"));

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);

const viewsController = require("./controller/viewsController");

app.use("/vote/:uuid", viewsController.votePage);

app.use("/result/:uuid", viewsController.resultPage);

app.use("/", viewsController.indexPage);

module.exports = app;
