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

module.exports = router;