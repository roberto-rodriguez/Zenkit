import axios from "axios";

window.axios = axios; //For testing in the web console

export const login = (history, data, errorCallback) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/login", data);

    if (res.data) {
      dispatch({ type: "SET_USER", data: res.data });
      history.push("/");
    }
  } catch (err) {
    errorCallback();
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
