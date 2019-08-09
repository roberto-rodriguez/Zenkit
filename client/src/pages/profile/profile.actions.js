import axios from "axios";
import * as objectUtil from "../../util/object.util";

export const saveProfile = profile => async dispatch => {
  const res = await axios.post("/api/user/save", profile);
  debugger;
  //dispatch({ type: "SET_OPEN_SPRINT", data: res.data });
};
