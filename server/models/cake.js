const mongoose = require("mongoose")
//mongoose.connect("mongodb://localhost/cakes", {useNewUrlParser: true});

const RatingSchema = new mongoose.Schema({
	rating: {type: Number},
	comment: {type: String, required: [true, "Please include a comment!"], minlength: 3}},{timestamps: true});

const CakeSchema = new mongoose.Schema({
	baker: {type: String, required: [true, "You must include a baker!"], minlength: 3},
	image:{type: String, required: [true, "Your post must include an image"], minlength: 3},
	ratings: [RatingSchema]}, {timestamps: true});

	//const Rating = mongoose.model("Rating", RatingSchema);
	const Cake = mongoose.model("Cake", CakeSchema)

	//module.exports = Rating;
	module.exports = Cake; 
