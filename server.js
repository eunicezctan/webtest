//setup express
var express = require('express'),
	app = express();

//setup dir structure and filesystem
var fs = require('fs'),
	rootDir = __dirname,
	modelDir = rootDir+'/models';

//setup http parser structure and filesystem
var bodyParser = require('body-parser'),
	jsonParser = bodyParser.json(),
	
	
	//setup passport for login 
var passport = require('passport'),
	localStr = require('passport-local').Strategy,
	session = require('express-session'),
	cookieParser = require('cookie-parser');

//setup mongoose for mongoDB
var mongoose = require('mongoose'),
	dbURL = 'mongodb://<dbuser>:<dbpassword>@ds059694.mongolab.com:59694/genni';
	mongoose.connect(dbURL);

app.configure(function() {
	app.use(express.static('./client')); // setup static directory
	
	app.use(bodyParser.urlencoded({ extended: false });
	app.use(bodyParser.json());

	app.use(cookieParser);
	app.use (session ({
		secert: 'cs360',
		resave: true,
		saveUninit: false
	}));
	
	app.use(passport.initialize());
	app.use(passport.session());
});

var Person = require('./models/personSchema');
passport.serializeUser(Person.serializeUser());
passport.deserializeUser(Person.deserializeUser());

//route
app.get ('/', function(req,res){
	console.log('index.html');
	res.sendFile('index.html');	
});

app.post ('/register', function(req,res){
	console.log('Register new user');
	Person.register(new Person({
		usename: req.body.email}), req.body.password
});




// start the server
var server = app.listen(3000, function() {
console.log("Started on port 3000");
var host = server.address().address;
var port = server.address().port;

});