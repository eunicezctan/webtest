var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	passportLocalDB = require('passport-local-mongoose')

var personSchema = new Schema({
	email: {type:String, unique:true},
	lastName : String,
	firstName : String,
	friendList : [{
		friendEmail : {type:String, unique:true}  	
	}] 
});	

personSchema.plugin (passportLocalDB);
module.exports = mongoose.model('Person', personSchema);
