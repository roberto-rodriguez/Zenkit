const requireLogin = require("../middlewares/requireLogin");
const fakeData = require("../fakeData");

module.exports = app => {
  app.get("/api/task/load/:name", requireLogin, (req, res) => {
    var taskName = req.params && req.params.name;

    const sprintList = fakeData.sprints;
    const taskList1 = sprintList[0].tasks;
    const taskList2 = sprintList[1].tasks;

    var filter;

    if (taskName && taskName != 0) {
      filter = s => s.name == taskName;
    } else filter = s => s.name == taskName; //temporal hackfix

    var task = taskList1.filter(filter)[0];

    if (!task) {
      // temporal hackfix
      task = taskList2.filter(filter)[0];
    }
    res.send(task);
  });

  app.get("/api/task/list", (req, res) => {
    const sprintList = fakeData.sprints;
    const taskList1 = sprintList[0].tasks;
    const taskList2 = sprintList[1].tasks; //temporal
    var taskList = [...taskList1, ...taskList2];
    res.send(taskList);
  });

  app.post("/api/task/add", (req, res) => {
    var taskData = req.params && req.params.values;

    //temporal option
    const sprintList = fakeData.sprints;
    let taskList = sprintList[2].tasks; //temporal

    res.send(taskList);
  });
};
