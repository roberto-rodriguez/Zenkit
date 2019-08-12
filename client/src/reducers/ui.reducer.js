const initialState = {
  provinces: null
};

export default function authReducer(state = initialState, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_UI_PROP":
      return {
        ...state,
        ...data
      };
    default:
      return state;
  }
}
