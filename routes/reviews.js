var express = require('express');
var router = express.Router();

var reviewsTest = [{name:"McDo", placeType:"Fastfood", stars: 3}, {name:"McDo", placeType:"Fastfood", stars: 3}];

router.get('/', function (req, res) {
	res.send(reviewsTest);
});

router.post('/', function (req, res) {
	reviewsTest.push(req.body);
	res.status(201);
	res.send(reviewsTest);
});

router.delete('/', function (req, res) {
	reviewsTest = undefined;
	res.status(204);
	res.send(reviewsTest);
});

router.get('/:id', function (req, res) {
	if(reviewsTest[req.params.id] !== undefined){
		res.send(reviewsTest[req.params.id]);
	} else {
		res.send(404);
	}
});

router.put('/:id', function(req, res){
	if(reviewsTest[req.params.id] !== undefined){
		reviewsTest[req.params.id] = req.query;
		res.status(201);
		res.send(reviewsTest);
	} else {
		res.send(404);
	}
});

router.delete('/:id', function(req, res){
	if(reviewsTest[req.params.id] !== undefined){	
		reviewsTest.splice(req.params.id, 1);
		res.send('The review has been deleted!');
	} else {
		res.send(404);
	}
});

module.exports = router;