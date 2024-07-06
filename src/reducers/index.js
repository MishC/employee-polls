import { combineReducers } from "redux";
import authedUser from "./authedUser";
import user from "./user";
import questions from "./questions";
import loading from './loading';


export default combineReducers({
  authedUser,
  user,
  questions,
  loading,
  });