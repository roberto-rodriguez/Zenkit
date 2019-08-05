import { combineReducers } from "redux";
import authReducer from "../pages/auth/auth.reducer"; 
import sprintReducer from "../pages/sprint/sprint.reducer";

const rootReducer = combineReducers({
  auth: authReducer, 
  sprint: sprintReducer
});

export default rootReducer;
