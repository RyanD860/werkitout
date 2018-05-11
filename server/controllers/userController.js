module.exports = {
  // Gets user once signed in
  checkForUser: function(req, res, next) {
    const db = req.app.get("db");
    req.session.user = { authid: req.user.id };
    db.checkForUser([req.session.user.authid]).then(resp => {
      if (resp.length < 1) {
        db
          .addUser([
            req.user.id,
            req.user.name.familyName,
            req.user.name.givenName
          ])
          .then(resp => {
            req.session.user = { id: resp[0].id, authid: req.session.user.id };
          })
          .catch(console.log());
      } else {
        req.session.user = { id: resp[0].id, authid: req.session.user.id };
      }
    });
  },

  getUser: function(req, res, next) {
    const db = req.app.get("db");

    if (req.session.user.id !== 0) {
      db
        .getUser(req.session.user.authid)
        .then(resp => {
          req.session.user.id = resp[0].id;
          res.status(200).json(resp);
        })
        .catch(res.status(500));
    } else {
      res.json({ message: "No user logged in" });
    }
  },
  addNewUserInfo: function(req, res, next) {
    const db = req.app.get("db");
    db.addtoWeight([req.body.id, req.body.weight]).then(
      db
        .addNewUserInfo([req.body.height, req.body.age, req.body.id])
        .then(resp => {
          res.json(resp);
        })
    );
  },
  getUserWeight: function(req, res, next) {
    const db = req.app.get("db");
    db.getUserWeight([req.params.id]).then(resp => {
      res.json(resp);
    });
  },
  addToUserWeight: function(req, res, next) {
    const db = req.app.get("db");
    db.addtoWeight([req.body.id, req.body.weight]).then(resp => {
      res.json(resp);
    });
  }
};
