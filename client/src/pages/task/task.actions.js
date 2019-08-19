import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openTask = taskName => async dispatch => {
  const res = await axios.get("/api/task/load/" + (taskName || 0));

  var task = res.data;

  dispatch({ type: "SET_OPEN_TASK", data: task });
};

export const listTasks = () => async dispatch => {
  const res = await axios.get("/api/task/list");

  if (res.data) {
    var tasks = objectUtil.listToObject(res.data);
    dispatch({ type: "SET_TASK_LIST", data: tasks });
    console.log('tasks: ', tasks);
  }
};

export const addTask = (history, formValues) => async dispatch => {
  const res = await axios.post("/api/task/add/" + (formValues || ""));

  if (res.data) {
    dispatch({ type: "SET_ADD_TASK", data: res.data });
    history.push("/");
  }
};

export const updateTask = (history, formValues) => async dispatch => {
  const res = await axios.patch("/api/task/update/" + (formValues || ""));

  dispatch({
    type: "SET_UPDATE_TASK",
    data: res.data
  });
  history.push("/");
};

export const removeTask = (taskId, history) => async dispatch => {
  const res = await axios.delete("/api/task/list/del" + (taskId || 0));

  dispatch({ type: "SET_REMOVE_TASK", data: res.data });
  history.push("/");
};
