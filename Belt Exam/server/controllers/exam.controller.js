const {Pirate} = require("../models/exam.models");

module.exports.findAllPirates = (request, response) => {
    Pirate.find({})
      .then(Pirates => response.json(Pirates))
      .catch(err => response.json(err))
}


module.exports.createPirate = (request, response) => {
  const { name, img, treasureChest, pirateCatchphrase, crewPosition, pegLeg, eyePatch, hookHand} = request.body;
  Pirate.create({
    name,
    img,
    treasureChest,
    pirateCatchphrase,
    crewPosition,
    pegLeg,
    eyePatch,
    hookHand
  })
      .then(pirate => response.json(pirate))
      .catch(err => response.status(400).json(err))
}


module.exports.getPirate = (request, response) => {
  Pirate.findOne({_id:request.params.id})
      .then(pirate => response.json(pirate))
      .catch(err => response.json(err))
}


module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
      .then(updatePirate => response.json(updatePirate))
      .catch(err => response.json(err))
}
module.exports.deletePirate = (request, response) => {
  Pirate.deleteOne({ _id: request.params.id })
      .then(deleteConfirmation => response.json(deleteConfirmation))
      .catch(err => response.json(err))
}