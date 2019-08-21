import axios from "axios";
import * as objectUtil from "../../../../util/object.util";

export const saveLog = (log, callback) => async dispatch => {
  const res = await axios.post("/api/log/save", log);

  dispatch({ type: "ADD_UPDATE_LOG", data: { ...log, ...res.data } });

  callback(res.data);
};

export const loadLogById = logId => async dispatch => {
  const res = await axios.get("/api/log/load/" + logId);

  dispatch({ type: "SET_OPEN_LOG", data: res.data });
};

export const deleteLog = logId => async dispatch => {
  const res = await axios.get("/api/log/delete/" + logId);

  dispatch({ type: "DELETE_LOG", data: logId });
};

export const listLogs = () => async dispatch => {
  const res = await axios.get("/api/log/list");

  if (res.data) {
    var logsObj = objectUtil.listToObject(res.data);
    dispatch({ type: "SET_LOG_LIST", data: logsObj });
  }
};
