import axios from "axios";

window.axios = axios; //For testing in the web console

export const login = (history, username, password) => async dispatch => {
  username = "a";
  password = "a";
  const res = await axios.post("/api/auth/login", { username, password });

  if (res.data) {
    dispatch({ type: "SET_USER", data: res.data });
    history.push("/");
  }
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/auth/fetch");

  if (res.data) {
    dispatch({ type: "SET_USER", data: res.data });
  } else {
    dispatch({ type: "START_APP" });
  }
};

export const logout = () => async dispatch => {
  const res = await axios.get("/api/auth/logout");

  dispatch({ type: "LOG_OUT" });
};

// export const submitSurvey = (values, history) => async dispatch => {
//   const res = await axios.post("/api/surveys", values);

//   dispatch({ type: FETCH_USER, payload: res.data });

//   history.push("/surveys");
// };
