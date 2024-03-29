const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//dotenv node module
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
require("./db/conn");

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//we link the router files to make our route easy
app.use(require("./router/auth"));

//port listen
app.listen(PORT, () => {
  console.log(`running at port no. ${PORT}`);
});
