var express = require('express');
var app     = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
	console.log('Test db opened');
});

app.get('*', function(req, res) {
	res.sendfile('./public/views/index.html');
});

app.listen(8080);