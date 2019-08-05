import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const openSprint = sprintId => async dispatch => {
  const res = await axios.get("/api/sprint/get/" + (sprintId || 0));
  debugger;
  dispatch({ type: "SET_OPEN_SPRINT", data: res.data });
};

export const listSprints = sprintId => async dispatch => {
  const res = await axios.get("/api/sprint/list");

  if (res.data) {
    var sprints = objectUtil.listToObject(res.data);
    dispatch({ type: "SET_SPRINT_LIST", data: sprints });
  }
};
