import { combineReducers } from "redux";
import Common from "./common";
import Users from "./users";

const rootReducer = combineReducers({
  common: Common,
  users: Users,
});

export default rootReducer;
