const requireLogin = require("../middlewares/requireLogin");
const serverProxy = require("./serverProxy");
const fakeData = require("../fakeData");
const axios = require("axios");
module.exports = app => {



  //esta puesto es español para que no me de conflicto con el otro
  //

  app.post("/api/comment/salvar", requireLogin, async (req, res) => {
  //app.post("/api/:entity/save", requireLogin, async (req, res) => {
    


    //esto de aqui es lo que no me pincha
    //const result = await serverProxy.post(
    //  "/api/" + entity + "/saveOrUpdate",
    //  req.body
    //  );
    //esto de aqui es lo que no me pincha
    //res.send( result.data );
    res.send( fakeData.comment );
  });


};
