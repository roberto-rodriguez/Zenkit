const requireLogin = require("../middlewares/requireLogin");
const fakeData = require("../uiprops.fakeData.js");

module.exports = app => {
  app.get("/api/uiprop/:prop", requireLogin, (req, res) => {
    var prop = req.params && req.params.prop;

    console.log("uiprop -> " + req.user);

    res.send(fakeData[prop]);
  });
};
