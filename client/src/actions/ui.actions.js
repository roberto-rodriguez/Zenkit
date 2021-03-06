import axios from "axios";

//use this for server props
export const fetchuiprop = prop => async dispatch => {
  const res = await axios.get("/api/" + prop + "/nomenclator");

  if (res.data && res.data.data) {
    dispatch({ type: "SET_UI_PROP", data: { [prop]: res.data.data } });
  }
};

//Use this for local props
export const getuiprop = prop => async (dispatch, getState) => {
  var { ui } = getState();

  return ui[prop];
};

export const setUIProp = (prop, value) => async dispatch =>
  dispatch({ type: "SET_UI_PROP", data: { [prop]: value } });
