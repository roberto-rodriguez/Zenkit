const requireLogin = require("../middlewares/requireLogin");
const serverProxy = require("./serverProxy");

module.exports = app => {
  app.get("/api/sprint/get/:id", requireLogin, async (req, res) => {
    var sprintId = req.params && req.params.id;

    var query;

    if (sprintId && sprintId > 0) {
      query = "id@is@(I)" + sprintId;
    } else {
      query = "active@is@(B)true";
    }

    const result = await serverProxy.get("/sprint/load?params=" + query);

    res.send(result && result.data);
  });

  app.get("/api/sprint/list", requireLogin, async (req, res) => {
    const result = await serverProxy.get("/sprint/list");

    res.send(result && result.data && result.data.List);
  });

  app.put("/api/task/move", requireLogin, async (req, res) => {
    res.send("ok");
  });
};
