const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	title: {
		type: String,
		// required: [true, "Name cannot be emtpy"],
		// minlength: [6, "The min length should be more than 6"]
	},
	price: {
		type: Number,
		// required: [true, "Age cannot be emtpy"],
		// min: [18, "Age should be more than 18"]
	},
	description: {
		type: String,
		// required: [true, "Name cannot be emtpy"],
		// minlength: [6, "The min length should be more than 6"]
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;