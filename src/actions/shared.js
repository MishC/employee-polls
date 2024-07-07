import { getUsers, getInitialData, getQuestions} from "../backend/api";
import { receiveUser } from "./user";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./uquestions";


export function authenticate(id,password){
    return async (dispatch) => {
       dispatch(startLoading());
        
       try {
        const users = await getUsers();
        const user=Object.values(users).map(user => Object.values(user)).find(user => user.includes(password) && user.includes(id));
     if (user) {
     dispatch(setAuthedUser(id));
     dispatch(receiveUser(users[id]));
     setTimeout(()=>dispatch(stopLoading()),500)
     return user
     }
     else {console.log("User(s) are not found"); dispatch(stopLoading());}
    }
    catch(error){
     console.error("Invalid user or password"); 
      dispatch(stopLoading())} 
      
}}


export function getUnansweredQuestions(user){
  return async (dispatch) => {
    if (!user){console.error("User is not received")};

   const {answers,questions}=user;
   const answers_=Object.keys(answers);
   const arr=[...new Set([...answers_, ...questions])];
   
    try {
      const ques = await getQuestions();
      const uQuestions = Object.values(ques).filter(q=>!arr.includes(q.id));
     
      dispatch(receiveQuestions(uQuestions));
 
      return uQuestions;
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
