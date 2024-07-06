import { getUsers, getInitialData, getQuestions, getUser } from "../backend/api";
import { receiveUser } from "./user";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";


export function authenticate(id,password,authenticated){
    return (dispatch) => {
       // dispatch(startLoading());
        
       //if (user){
        //console.log(Object.values(user));
  // Object.values(users).map(user => Object.values(user)).find(user => user.includes(password) && user.includes(id))
      //Object.values(user).find(user=>user.includes(password))
        //? 
        //:console.error("Invalid user or password"); 
      //  dispatch(stopLoading())} else {console.log("users are not found"); dispatch(stopLoading())}
      
}}







export function getUserById(id,password){
  return async (dispatch) => {
    dispatch(startLoading()); 
  
try {
    const user = getUser(id);
    if (user){
  Object.values(user).find(property=>property.includes(password))?
   dispatch(receiveUser(user)):console.log("Wrong password!");
   dispatch(setAuthedUser(id, password, true));
   setTimeout(()=> dispatch(stopLoading()),500)}
   else {console.log("Wrong id!");dispatch(stopLoading())}
   return user
  } catch (error) {
    console.error("Failed to to get user:", error);
    throw error;
  }
};
}


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
