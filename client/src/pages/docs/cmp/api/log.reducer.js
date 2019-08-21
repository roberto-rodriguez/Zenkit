const initialState = {
  openLog: null, //open Sprint goes here
  logList: null // object of {id: log}
};

export default function sprintReducer(state = initialState, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_OPEN_LOG":
      return {
        ...state,
        openLog: { ...data }
      };
    case "ADD_UPDATE_LOG":
      return {
        ...state,
        logList: { ...state.logList, [data.id]: { ...data } }
      };
    case "SET_LOG_LIST":
      return {
        ...state,
        logList: { ...data }
      };
    case "DELETE_LOG":
      var id = data;
      delete state.logList[id];

      return {
        ...state,
        logList: { ...state.logList }
      };
    default:
      return state;
  }
}
