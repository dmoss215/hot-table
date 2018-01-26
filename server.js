var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var api = require("./routes/apiRouter");
var html = require("./routes/htmlRouter");

html.get("/");

app.listen(PORT, function () {
    console.log("server listening on port: ", PORT);
})