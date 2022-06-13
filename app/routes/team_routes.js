module.exports = function(app, db) {
  app.post('/teams', (req, res) => {
    res.send('Hello');
  });
}