var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "/public/index.html")); // Try this: ../13-StarWars-6/view2.html
	});

	app.get("/view", function(req, res) {
		res.sendFile(path.join(__dirname, "/public/viewTable.html"));
	});

	app.get("/reservations", function(req, res) {
		res.sendFile(path.join(__dirname, "/public/reservation.html"));
	});
}

