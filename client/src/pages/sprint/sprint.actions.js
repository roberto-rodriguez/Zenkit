import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openSprint = sprintId => async dispatch => {
  const res = await axios.get("/api/sprint/load/" + (sprintId || 0));

  var sprint = res.data;
  sprint.tasks = objectUtil.listToObject(sprint.tasks);

  dispatch({ type: "SET_OPEN_SPRINT", data: sprint });
};

export const listSprints = sprintId => async dispatch => {
  const res = await axios.get("/api/sprint/list");

  if (res.data) {
    var sprints = objectUtil.listToObject(res.data);
    dispatch({ type: "SET_SPRINT_LIST", data: sprints });
  }
};

export const moveTask = (sprintId, taskId, status) => async dispatch => {
  const res = await axios.put("/api/task/move", {task: taskId, status: status});

  if (res.status === 200) {
    dispatch(openSprint(sprintId));
  }
};
