const passport = require("passport");
const requireLogin = require("../middlewares/requireLogin");
const fakeData = require("../fakeData");

module.exports = app => {
  app.get("/api/sprint/get/:id", requireLogin, (req, res) => {
    console.log("sprintRoutes -> " + req.user);
    var sprintId = req.params && req.params.id;

    const list = fakeData.sprints;

    var filter;

    if (sprintId && sprintId > 0) {
      filter = s => s.id == sprintId;
    } else {
      filter = s => s.active;
    }

    var sprint = list.filter(filter)[0];

    res.send(sprint);
  });

  app.get("/api/sprint/list", requireLogin, (req, res) => {
    const list = fakeData.sprints;
    res.send(list);
  });
};
