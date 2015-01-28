var express = require('express');
var router = express.Router();

var reviewsTest = [{name:"McDo", placeType:"Fastfood", stars: 3}, {name:"McDo", placeType:"Fastfood", stars: 3}];

router.get('/', function (req, res) {
	res.send(reviewsTest);
});

router.post('/', function (req, res) {
	reviewsTest.push(res.json[0]);
	res.send(reviewsTest);
});

router.delete('/', function (req, res) {
	reviewsTest = undefined;
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
		res.send('The review has been updated!');
	} else {
		res.status('404');
		res.send('The id does not exists.');
	}
});

router.delete('/:id', function(req, res, next){
	if(reviewsTest[req.params.id] !== undefined){	
		reviewsTest.splice(req.params.id, 1);
		res.send('The review has been deleted!');
	} else {
		res.status('404');
		res.send('The id does not exists.');
	}
});

module.exports = router;