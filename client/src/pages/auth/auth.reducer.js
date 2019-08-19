const initialState = {
  id: null,
  name: null,
  appStarted: false
};

export default function authReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "START_APP":
      return {
        ...state,
        appStarted: true
      };

    case "SET_USER":
      return {
        ...state,
        ...data,
        appStarted: true
      };
    case "LOG_OUT":
      return {
        ...initialState,
        appStarted: true
      };
    default:
      return state;
  }
}
