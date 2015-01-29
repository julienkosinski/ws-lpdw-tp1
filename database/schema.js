var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewsSchema = new Schema({
	name: String,
	placeType: String,
	stars: Number
});

module.exports = mongoose.model('schema', reviewsSchema);