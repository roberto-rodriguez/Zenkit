const passport = require("passport");

module.exports = app => {
  app.post("/api/auth/login", passport.authenticate("local"), (req, res) =>
    res.send(req.user)
  );

  app.get("/api/auth/logout", (req, res) => {
    req.logout();
    res.send({});
  });

  app.get("/api/auth/fetch", (req, res) => {
    res.send(req.user);
  });
};
