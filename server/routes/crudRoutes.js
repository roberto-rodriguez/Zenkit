const requireLogin = require("../middlewares/requireLogin");
const serverProxy = require("./serverProxy");
const fakeData = require("../fakeData");

module.exports = app => {
  app.get("/api/:entity/load/:params?", requireLogin, async (req, res) => {
    var { entity, params } = req.params;

    if (Number.isInteger(params)) {
      params = "id@is@(I)" + params;
    }

    const result = await serverProxy.get(
      "/" + entity + "/load?params=" + params
    );

    res.send(result && result.data);
  });

  app.get("/api/:entity/list/:params?", async (req, res) => {
    var { entity, params } = req.params;
    const result = await serverProxy.get(
      "/" + entity + "/list?params=" + params
    );

    res.send(result && result.data && result.data.List);
  });

  app.post("/api/:entity/save", requireLogin, async (req, res) => {
    var { entity } = req.params;

    const result = await serverProxy.post(
      "/" + entity + "/saveOrUpdate",
      req.body
    );

    res.send(result && result.data && result.data.data && result.data.data);
  });

  app.get("/api/:entity/delete/:id", async (req, res) => {
    var { entity, id } = req.params;
    const result = await serverProxy.get("/" + entity + "/delete/" + id);

    res.send(result && result.data);
  });

  app.get("/api/:entity/nomenclator/:params?", async (req, res) => {
    var { entity, params } = req.params;
    const result = await serverProxy.get(
      "/" + entity + "/nomenclator?params=" + params
    );

    res.send(result && result.data && result.data);
  });
};
