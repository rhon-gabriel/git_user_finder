import { combineReducers } from "redux";
import usersReducer from "../containers/Users/redux/reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
