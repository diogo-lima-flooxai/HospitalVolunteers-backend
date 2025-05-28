const express = require("express");
const app = express();
const routes = require('./routes/index')

app.use(express.json());

//centraliza todas as rotas
app.use("/api", routes);

module.exports = app;
