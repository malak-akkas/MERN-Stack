const PirateController = require("../controllers/exam.controller");

module.exports = app => {
app.get("/api/pirates", PirateController.findAllPirates);
app.post("/api/pirate/new", PirateController.createPirate);
app.get('/api/pirate/:id', PirateController.getPirate);
app.put('/api/pirate/:id', PirateController.updatePirate);
app.delete('/api/pirate/:id', PirateController.deletePirate);



};