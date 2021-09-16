const PlayerController = require('../controllers/team.controller');
module.exports = function(app){
    app.post('/api/player/new', PlayerController.createPlayer);
    app.get('/api/player', PlayerController.getAllPlayers);
    app.get('/api/player/:id', PlayerController.getPlayer);
    // app.delete('/api/player/:id', PlayerController.deletePlayer);

}