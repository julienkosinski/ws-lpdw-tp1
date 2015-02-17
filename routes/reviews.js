var express = require('express');
var router = express.Router();
var reviewsSchema = require('../database/schema');

//var reviewsTest = [{name:"McDo", placeType:"Fastfood", stars: 3}, {name:"McDo", placeType:"Fastfood", stars: 3}];

router.route('/')
	.get(function (req, res) {
		reviewsSchema.find({}, function (err, reviews) {
			if (err) {
				res.status(500).send({'error': err});
			} else {
				if (req.get('Accept').toString().match(/html/)) {
					res.render('reviews', {reviews: reviews});
				}
				else {
					res.send(reviews);
				}
			}
		})
	})

	.post(function (req, res) {
		if(!req.body.name || !req.body.placeType || !req.body.stars) {
			res.status(400).send("Please enter every parameters required.");
		} else {
			var review = {
				name: req.body.name,
				placeType: req.body.placeType,
				stars: req.body.stars
			};
			reviewsSchema.create(review, function (err, review) {
				if(err){
					res.status(500);
				}
				else{
					res.status(201);
					if (req.get('Accept').toString().match(/html/)) {
						res.redirect("/reviews/"+review.id)
					}
					else {
						res.send(reviews);
					}
				}
			});
		}
	})

	.delete(function (req, res) {
		reviewsSchema.remove(function (err) {
			if(err){
				res.status(500).send();
			}
			else{
				res.status(204).send();
			}
		});
	})
;

router.route('/add') 
	.get(function (req, res) {
		console.log('here');
		if (req.get('Accept').toString().match(/html/)) {
			res.render('review-add');
		}
		else {
			res.status(400).send("This view is browser specific!");
		}
	})
;

router.route('/:id') 
	.get( function (req, res) {
		reviewsSchema.findOne({_id: req.params.id}, function (err, review) {
			if(err){
				res.send(404);
			} else {
				if (req.get('Accept').toString().match(/html/)) {
					res.render('review', {review: review});
				}
				else {
					res.send(review);
				}
			}
		});
	})
	.put(function(req, res){
		reviewsSchema.findOneAndUpdate({_id: req.params.id}, req.body, function (err, review) {
			if(err) {
				res.send(404);
			} else {
				res.status(201).send(review);
			}
		});
	});


router.put('/:id', function(req, res){
	reviewsSchema.findOneAndUpdate({_id: req.params.id}, req.body, function (err, review) {
		if(err) {
			res.send(404);
		} else {
			res.status(201).send(review);
		}
	});
});

router.delete('/:id', function(req, res){
	reviewsSchema.findOneAndRemove({_id: req.params.id}, req.body, function (err, review) {
		if(err) {
			res.send(404);
		} else {
			res.send('The review has been deleted!');
		}
	});
});

router.get('/edit/:id', function(req,res){
	reviewsSchema.findOne({_id: req.params.id}, function (err, review) {
		if(err){
			res.send(404);
		} else {
			if (req.get('Accept').toString().match(/html/)) {
				res.render('review-edit', {review: review});
			}
			else {
				res.status(400).send("This view is browser specific!");
			}
		}
	});
});

module.exports = router;