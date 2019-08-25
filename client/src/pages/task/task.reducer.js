const initialState = {
  taskOpen: null, //open Task goes here
  list: null // object of {id: task}
};

export default function taskReducer(state = initialState, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_OPEN_TASK":
      return {
        ...state,
        taskOpen: { ...data }
      };
    case "SET_TASK_LIST":
      return {
        ...state,
        list: { ...data }
      };
    case "SET_ADD_TASK":
      return {
        ...state,
        list: { ...data }
      };
    case "SET_REMOVE_TASK":
      return {
        ...state,
        list: { ...data }
      };
    default:
      return state;
  }
}
