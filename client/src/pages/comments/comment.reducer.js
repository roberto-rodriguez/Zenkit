const initialState = {
  open: null,
  list:null,
  };

export default function commentReducer(state = initialState, action) {
  var { type, data } = action;

  switch (type) {
    case "OPEN_COMMENT":
      return {
        ...state,
        open: { ...data }
      };
    case "LIST_COMMENT":
      return {
        ...state,
        list: { ...data }
      };
    case "ADD_COMMENT":
      return {
        ...state,
        list: { ...data }
      };
    case "EDIT_COMMENT":
        return {
          ...state,
          list: { ...data }
        };
    default:
      return state;
  }
}
