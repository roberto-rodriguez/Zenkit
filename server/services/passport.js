const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const fakeData = require("../fakeData");

passport.serializeUser((user, done) => {
  done(null, user.id /*mongo id*/);
});

passport.deserializeUser((id, done) => {
  var user = fakeData.user;
  // User.findById(id).then(user => {
  done(null, user);
  // });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    var user = fakeData.user;

    if (username == "a" && password == "a") {
      return done(null, user);
    } else {
      return done(null, false);
    }

    // User.findOne({ username: username }, function(err, user) {
    // if (err) { return done(err); }
    // if (!user) {
    //   return done(null, false, { message: 'Incorrect username.' });
    // }
    // if (!user.validPassword(password)) {
    //   return done(null, false, { message: 'Incorrect password.' });
    // }
    // return done(null, user);
    // });
  })
);
