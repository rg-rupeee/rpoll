const express = require('express');
const app = express();

const apiRouter = require("./routes/apiRoutes");
app.use('/api', apiRouter);

module.exports = app;