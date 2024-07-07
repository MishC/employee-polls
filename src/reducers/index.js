import { combineReducers } from "redux";
import authedUser from "./authedUser";
import user from "./user";
import uquestions from "./uquestions";
import loading from './loading';


export default combineReducers({
  authedUser,
  user,
  uquestions,
  loading,
  });