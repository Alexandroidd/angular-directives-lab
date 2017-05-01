var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/card-app");

module.exports.Card = require('./cards.js');