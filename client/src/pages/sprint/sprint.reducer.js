const initialState = {
  open: null, //open Sprint goes here
  list: null // object of {id: sprint}
};

export default function sprintReducer(state = initialState, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_OPEN_SPRINT":
      return {
        ...state,
        open: { ...data }
      };
    case "SET_SPRINT_LIST":
      return {
        ...state,
        list: { ...data }
      };
    default:
      return state;
  }
}
