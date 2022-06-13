const teamRoutes = require('./team_routes');

module.exports = function(app, db) {
  teamRoutes(app, db);
}