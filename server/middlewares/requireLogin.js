module.exports = (req, res, nextMiddleware) => {
  console.log("RequireLogin Midleware:: req.user -> " + req.user);
  //TODO try req.isAuthenticated()
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  } else {
    nextMiddleware();
  }
};
