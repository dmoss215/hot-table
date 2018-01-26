var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("server listening on port 3000")
})