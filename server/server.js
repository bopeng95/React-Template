require('./db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = mongoose.model('Person');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const port = 5000;

app.get('/api/people', (req, res) => {
	Person.find((err, result, count) => {
		res.json(result.map(function(e) {
			let obj = {
				id: e._id,
				name: e.name,
				email: e.email
			}; return obj;
		}));
	})
});

// app.post('/add', (req, res) => {
// 	let n = req.body.name;
// 	let e = req.body.email;
// 	console.log(n,e);
// 	const p = new Person({
// 		name: n,  
// 		email: e
// 	});
// 	p.save((err, result, count) => {
// 		if(err) { res.send(err); }
// 		else { res.send(result);}
// 	});
// });

app.listen(port, () => console.log('Server on port 5000'));