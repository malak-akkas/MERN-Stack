const User = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
  User.find()
    .then(allDaProducts => res.json({ products: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleProduct => res.json({ product: oneSingleProduct }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedProduct => res.json({ product: newlyCreatedUser }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ user: updatedProduct }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
