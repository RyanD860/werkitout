// Installing Dependencies
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const strategy = require(`${__dirname}/strategy`);
const port = 3020;
const checkForSession = require("./checkForSession");

// Importing Controllers
const exerciseCont = require(`${__dirname}/controllers/ExerciseController`);
const userCont = require(`${__dirname}/controllers/userController`);

// Creating instance of express server
const app = express();
app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    console.log("Db is connected");
    app.set("db", db);
    // Added Stock to database
    // db.addStock();
    // Added Images to database
    // db.addImages();
  })
  .catch(console.log);

// Creating a session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 864000000 }
  })
);

// Authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(checkForSession);

passport.use(strategy);

passport.serializeUser((profile, done) => {
  done(null, profile);
});

passport.deserializeUser((profile, done) => {
  done(null, profile);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);
app.get("/me", function(req, res, next) {
  if (!req.user.id) {
    res.redirect("/login");
  } else {
    userCont.checkForUser(req);
    res.redirect(`http://localhost:3000/#/profile`);
  }
});

app.get("/api/logout", (req, res, next) => {
  req.session.destroy();
  next();
  res.status(200);
});

//End Points

//GET
app.get("/api/user", userCont.getUser);
app.get("/api/exercises", exerciseCont.getExercises);

// POST
app.post("/api/user/add", userCont.addNewUserInfo);
// PUT

// REMOVE

// App listening on port 3020
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
