import { getUsers, getInitialData, getQuestions, addQuestion} from "../backend/api";
import { _saveQuestion } from "../backend/_DATA";
import { receiveUser } from "./user";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions,receiveAQuestions,receiveUQuestions } from "./questions";
//import { receiveUQuestions } from "./uquestions";

export function authenticate(id,password){
    return async (dispatch) => {
       dispatch(startLoading());
        
       try {
        const users = await getUsers();
        const user=Object.values(users).map(user => Object.values(user)).find(user => user.includes(password) && user.includes(id));
     if (user) {
     dispatch(setAuthedUser(id));
     dispatch(receiveUser(users[id]));
     dispatch(stopLoading());
     return user
     }
     else {console.log("User(s) are not found"); dispatch(stopLoading());}
    }
    catch(error){
     console.error("Invalid user or password"); 
      dispatch(stopLoading())} 
      
}}


export function getUnansweredQuestions(user) {
  return async (dispatch) => {
    if (!user.answers) {
      console.error("User is not received");
      return;
    }

    const { answers } = user;
    const answeredIds = Object.keys(answers);
    
    try {
      const ques = await getQuestions(); // Assuming getQuestions fetches all questions
      const uQuestions = Object.values(ques).filter(q => !answeredIds.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp);

      dispatch(receiveUQuestions(uQuestions));
    } catch (error) {
      console.error("Failed to fetch questions:", error);
      throw error;
    }
  };
}
 
  export function getAnsweredQuestions(user){
    return async (dispatch) => {
      if (!user){console.error("User is not received");return};
  
     const {answers}=user;
     const arr=Object.keys(answers);
    
     
      try {
        const ques = await getQuestions();
        const aQuestions = Object.values(ques).filter(q=>arr.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp);
       
        await dispatch(receiveAQuestions(aQuestions));
   
        return aQuestions;
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        dispatch(stopLoading());
        throw error;
      }
    };}
       
   


export function getAllUsers() {
    return async (dispatch) => {
      dispatch(startLoading()); 
  
      try {
        const users = await getUsers();
        dispatch(receiveUser(users)).sort((a, b) => b.timestamp - a.timestamp);
        dispatch(stopLoading());
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
        console.error("Failed to fetch questions:", error);
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
