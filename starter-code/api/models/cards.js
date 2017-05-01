var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CardSchema = new Schema({
	question: String
});

var Card = mongoose.model('Card', CardSchema);
module.exports = Card;
