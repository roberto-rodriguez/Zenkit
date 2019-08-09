import { combineReducers } from "redux";
import authReducer from "../pages/auth/auth.reducer";
import sprintReducer from "../pages/sprint/sprint.reducer";
import uiReducer from "./ui.reducer.js";
import { reducer as reduxForm } from "redux-form";

const rootReducer = combineReducers({
  auth: authReducer,
  sprint: sprintReducer,
  form: reduxForm,
  ui: uiReducer
});

export default rootReducer;
