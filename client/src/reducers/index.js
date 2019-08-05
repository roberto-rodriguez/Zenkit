import { combineReducers } from "redux";
import authReducer from "../pages/auth/authReducer"; 
import sprintReducer from "../pages/sprint/sprintReducer";

const rootReducer = combineReducers({
  auth: authReducer, 
  sprint: sprintReducer
});

export default rootReducer;
