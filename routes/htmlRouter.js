var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html")); // Try this: ../13-StarWars-6/view2.html
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "viewTable.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});