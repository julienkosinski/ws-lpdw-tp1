var express = require('express');
var router = express.Router();

var reviewsTest = [{name:"McDo", placeType:"Fastfood", stars: 3}, {name:"McDo", placeType:"Fastfood", stars: 3}];

router.get('/', function (req, res) {
	res.send(reviewsTest);
});

router.post('/', function (req, res) {
	res.send('OK');
});

router.delete('/', function (req, res) {
	res.send('OK');
});
module.exports = router;