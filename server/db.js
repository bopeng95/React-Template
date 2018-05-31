const mongoose = require('mongoose');

const person = mongoose.Schema({
	name: String,
	email: String
});

mongoose.model('Person', person);

mongoose.connect('mongodb://localhost/react');