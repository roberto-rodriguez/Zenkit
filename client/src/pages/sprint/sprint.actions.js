import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openSprint = sprintId => async dispatch => {
  const res = await axios.get("/api/sprint/load/" + (sprintId || null));

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
  const res = await axios.put("/api/task/move", {
    task: taskId,
    status: status
  });

  if (res.status === 200) {
    dispatch(openSprint(sprintId));
  }
};

export const saveSprint = formValues => async dispatch => {
  const res = await axios.post("/api/sprint/save/", formValues);

  if (res.data) {
    dispatch({ type: "SET_ADD_SPRINT", data: res.data });
    window.location.reload(); //temporal way to refresh the page
  }
};

export const onDragEnd = ({ source, destination }) => async dispatch => {
  //Fix: Call api to update task status maybe a PUT
  dispatch({
    type: "UPDATE_TASK_STATUS",
    data: { task_id: source.index, task_status: destination.droppableId }
  });
};
