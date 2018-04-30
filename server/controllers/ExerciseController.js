module.exports = {
  // Gets all exercises
  getExercises: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getAllExercises()
      .then(response => {
        res.json(response);
      })
      .catch(console.log);
  }
};
