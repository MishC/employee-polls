import { getUsers, getInitialData, getQuestions, getUserById,authenticateUser} from "../backend/api";
import { receiveUser } from "./user";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";


export function authenticate(id,password){
    return async (dispatch) => {
       dispatch(startLoading());
        
       try {
        const users = await getUsers();
        const user=Object.values(users).map(user => Object.values(user)).find(user => user.includes(password) && user.includes(id));
     if (user) {
     dispatch(setAuthedUser(id));
     dispatch(receiveUser(user));
     setTimeout(()=>dispatch(stopLoading()),500)
     return user
     }
     else {console.log("User(s) are not found"); dispatch(stopLoading());}
    }
    catch(error){
     console.error("Invalid user or password"); 
      dispatch(stopLoading())} 
      
}}


export function getAnsweredQuestions(ids){

}


export function getAllUsers() {
    return async (dispatch) => {
      dispatch(startLoading()); 
  
      try {
        const users = await getUsers();
        dispatch(receiveUser(users));
        setTimeout(()=> dispatch(stopLoading()),500)
        return users;
      } catch (error) {
        console.error("Failed to fetch users:", error);
        dispatch(stopLoading());
        throw error;
      }
    };
  }

  export function getAllQuestions() {
    return async (dispatch) => {
      dispatch(startLoading()); 
  
      try {
        const questions = await getQuestions();
        dispatch(receiveQuestions(questions));
        setTimeout(()=> dispatch(stopLoading()),500)
        return questions;
      } catch (error) {
        console.error("Failed to fetch users:", error);
        dispatch(stopLoading());
        throw error;
      }
    };
  }
 

export function handleInitialData() {
  return (dispatch) => {
    dispatch(startLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUser(users));
      dispatch(receiveQuestions(users));

      dispatch(receiveQuestions())
      dispatch(stopLoading());
    });
  };
}
