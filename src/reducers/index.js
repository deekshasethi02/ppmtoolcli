import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectTaskReducer from "./projectTaskReducer";

export default combineReducers({
  errors: errorReducer,
  project_task: projectTaskReducer
});
