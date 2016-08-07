/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');

// user Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

//Get All Users
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

//Get One User
module.exports.getOneUser = function(id, callback){
	//var query = {_id: id};
	//User.findById(query, callback);
	User.findById(id, callback);
}

//Add User
module.exports.addUser = function(user, callback){
	User.create(user, callback);
}

// Update User
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
		name: user.name,
		password: user.password
	}
	User.findOneAndUpdate(query, update, options, callback);
}


// Delete User
module.exports.removeUser = function(id, callback){
	var query = {_id: id};
	User.remove(query, callback);
}
