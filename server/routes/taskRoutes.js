const requireLogin = require("../middlewares/requireLogin");
const serverProxy = require("./serverProxy");
const fakeData = require("../fakeData");

module.exports = app => {
  app.get("/api/task/load/:name", requireLogin, async (req, res) => {
    var taskName = req.params && req.params.name;

    var query;

    if (taskName && taskName != null) {
      query = "name@is@(S)" + taskName;
    } else {
      query = "id@is@(I)1";
    }

    const result = await serverProxy.get("/task/load?params=" + query);

    res.send(result && result.data);
  });

  app.get("/api/task/list", async (req, res) => {
    const result = await serverProxy.get("/task/list");

    res.send(result && result.data && result.data.List);
  });

  app.post("/api/task/add/", requireLogin, async (req, res) => {
    var taskData = req.params && req.params.values;

    const result = await serverProxy.post("/task/add?params=" + taskData);

    res.send(result && result.data);
  });
};
