const {Product} = require("../models/product.model");

// module.exports.findAllProducts = (req, res) => {
//   Product.find({})
//     .then(allDaProducts => res.json({ products: allDaProducts }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
module.exports.findAllProducts = (request, response) => {
  Product.find({})
      .then(products => response.json(products))
      .catch(err => response.json(err))
}

// module.exports.findOneSingleProduct = (req, res) => {
// 	Product.findOne({ _id: req.params.id })
// 		.then(oneSingleProduct => res.json({ product: oneSingleProduct }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description
  })
      .then(product => response.json(product))
      .catch(err => response.json(err));
}

// module.exports.updateExistingProduct = (req, res) => {
//   Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedProduct => res.json({ product: updatedProduct }))
//     .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingProduct = (req, res) => {
//   Product.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.getAllProducts = (request, response) => {
//   Products.find({})
//       .then(products => response.json(products))
//       .catch(err => response.json(err))
// };
module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(product => response.json(product))
      .catch(err => response.json(err))
}


module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updateProduct => response.json(updateProduct))
      .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}

