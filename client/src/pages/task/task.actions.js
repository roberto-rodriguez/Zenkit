import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openTask = taskName => async dispatch => {
  const res = await axios.get("/api/task/load/" + ("name@is@(S)"+taskName || null));

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

export const saveTask = (history, formValues) => async dispatch => {
  const res = await axios.post("/api/task/save/", formValues);

  if (res.data) {
    dispatch({ type: "SET_ADD_TASK", data: res.data });
    //history.push("/");
    window.location.reload();//temporal way to refresh the page
  }
};

export const removeTask = (history, taskId) => async dispatch => {
  const res = await axios.get("/api/task/delete/" + (taskId || 0));

  dispatch({ type: "SET_REMOVE_TASK", data: res.data });
  history.push("/");
};

export const filterTasks = (filters) => async dispatch => {
  var params = Object.keys(filters || {}).map(function(filter) {
    switch (filter) {
      case 'title':
          return "title,name@is@(S)"+filters[filter] 
      case 'assignee':
          return "assignee.id@is@(I)"+filters[filter]
      case 'sprint':
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
