'use strict'

const express	= require('express'),
	bodyParser 	= require('body-parser');

const app 		= express();
const port		= process.env.PORT || 3000;
const db		= require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var questionsList = [
//     {
//     	question: "What is Batman's guilty pleasure?"},
//     {
//     	question: "I'm sorry professor, I couldn't complete my homework because _________."},
//     {
//     	question: "I get by with a little help from _________."},
//     {	
//     	question: "_________. It's a trap!"},
//     {
//     	question: "The class field trip was completely ruined by _________."},
//     {
//     	question: "What's my secret power?"}
//   ];

//serves static files from public
app.use(express.static(__dirname + '/public'));

//INDEX ROUTE
app.get('/cards', function(req, res){
	db.Card.find({}, function(err, cards) {
		res.json(cards);	
	});
});

//SHOW ROUTE
app.get('/cards/:id', function(req, res){
	var id = req.params.id;
	db.Card.findOne({_id: id}, function(err, card){
		res.json(card);
	});
});

//POST ROUTE
app.post('/cards', function(req,res){
	var newCard = new db.Card({
		question: req.body.question
	});
	console.log(req.question);

	newCard.save(function(err, card){
		if(err){return console.log('save error' + err);
		}
		console.log('saved question ' + card.question);
	});
});

//DELETE ROUTE
app.delete('/cards/:id', function(req,res){
	var cardId = req.params.id;
	db.Card.remove({_id: cardId}, function destroy(err, cardToDelete){
		if(err) {return console.log('remove error ' + err);}
	res.json(db.Card);
	});
});








app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});








//start server
app.listen(port, function() {
	console.log('Server start on', + port);
});