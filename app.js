const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(morgan("dev"));

const apiRouter = require("./routes/apiRoutes");
app.use("/api", apiRouter);

app.use("/vote/:uuid", (req, res) => {
	res.render("Poll");
});

app.use("/result/:uuid", (req, res) => {
	res.render("Poll");
});

module.exports = app;
