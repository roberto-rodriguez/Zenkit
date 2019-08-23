import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openTask = taskName => async dispatch => {
  const res = await axios.get("/api/task/load/" + (taskName || null));

  var task = res.data;

  dispatch({ type: "SET_OPEN_TASK", data: task });
};

export const listTasks = () => async dispatch => {
  const res = await axios.get("/api/task/list");

  if (res.data) {
    var tasks = objectUtil.listToObject(res.data);

    dispatch({ type: "SET_TASK_LIST", data: tasks });
  }
};

export const save = (history, formValues) => async dispatch => {
  const res = await axios.post("/api/task/save/", formValues);

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
  const res = await axios.delete("/api/task/list/del/" + (taskId || 0));

  dispatch({ type: "SET_REMOVE_TASK", data: res.data });
  history.push("/");
};

export const filterTasks = (filters) => async dispatch => {
  var params = Object.keys(filters).map(function(filter) {
    switch (filter) {
      case 'title':
          return "title,name@is@(S)"+filters[filter] 
      case 'sprint':
      case 'assignee.id':
      case 'status':  
        return filter + "@is@(I)"+filters[filter]
      default:
        break;
    }
  }).join("@p@");

  const res = await axios.get("/api/task/list/" + params);

  if (res.data) {
    var tasks = objectUtil.listToObject(res.data);

    dispatch({ type: "SET_TASK_LIST", data: tasks });
  }
};
