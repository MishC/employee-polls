import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import loading from './loading';
import selectedUser from "./selectedUser";


export default combineReducers({
  authedUser,
  users,
  questions,
  loading,
  
  selectedUser
});