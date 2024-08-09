import { combineReducers } from "redux";
import authedUser from "./authedUser";
import user from "./user";
import questions from "./questions";
import loading from './loading';
import users from "./users";

export default combineReducers({
  authedUser,
  user,
  users,
  questions,
  loading,
  });