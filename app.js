/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(express.static(__dirname+'/ui'));
app.use(bodyParser.json());

User1 =require('./model/user');
//Connect to Mongoose
mongoose.connect('mongodb://localhost/user');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('User Management RESTAPI');
});

app.get('/api/users', function(req, res){
	User1.getUsers(function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/users/:_id', function(req, res){
	var id = req.params._id;
	User1.getOneUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.post('/api/users', function(req, res){
	var user1 = req.body;
	User1.addUser(user1, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.put('/api/users/:_id', function(req, res){
	var id = req.params._id;
	var user = req.body;
	User1.updateUser(id, user, {}, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.delete('/api/users/:_id', function(req, res){
	var id = req.params._id;
	User1.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.listen(3000);
console.log('Running on port 3000...');