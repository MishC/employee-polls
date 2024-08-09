import { getUsers, getInitialData, getQuestions, getUserById} from "../backend/api";
import { _saveQuestion,_saveQuestionAnswer } from "../backend/_DATA";
import { receiveUser,receiveAllUsers } from "./user";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { checkVotes } from "./checkVotes";

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
      const ques = await getQuestions();
      const uQuestions = Object.values(ques).filter(q => !answeredIds.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp);

      dispatch(receiveQuestions(uQuestions,false));
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
        const aQuestions = Object.values(ques).filter(q=>
          arr.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp);
       
        await dispatch(receiveQuestions(aQuestions,true));
        //dispatch(checkAnswerVotes(ques,user));
       
   
        return aQuestions;
      } catch (error) {
        console.error("Failed to fetch questions:", error);
        throw error;
      }
    };}

   export async function getUser(id){
    return async (dispatch) => {
      if (!id){console.error("Id is invalid. Cannot deliver en user.");return};
      try { 
        
        const user = await getUserById(id).then(user=>
          dispatch(receiveUser(user))).then(user=> 
            user.name);

         return user;

      } catch (error) {
        console.error("Failed to fetch user by id:", error);
        throw error;
      }
   }
  }

  export function checkAnswerVotes(questions, user){
    return (dispatch)=>{
    try {Object.keys(questions).forEach(questionId => {
      const question = questions[questionId];
      if (question.answered === true) {
        const answer = user.answers[questionId];
        console.log("answer:",answer)
        if (answer === 'optionOne' && !question.optionOne.votes.includes(user.id)) {
        dispatch(checkVotes(questionId, 'optionOne', user.id));
      } else if (answer === 'optionTwo'&& !question.optionTwo.votes.includes(user.id)) {
        dispatch(checkVotes(questionId, 'optionTwo', user.id));
      }
    }
    })
  }
  
    catch (error) {
      console.error("Cannot check the votes:", error);
      throw error;
    }
  }
}
  

/****************************************************************************/
export function getAllUsers() {
    return async (dispatch) => {
  
      try {
        return await getUsers().then(users=>dispatch(receiveAllUsers(users)));      

      } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
      }
    };
  }

  export function getAllQuestions() {
    return async (dispatch) => {
      dispatch(startLoading()); 
  
      try {
        const questions = await getQuestions();
        dispatch(receiveQuestions(questions,true));
        dispatch(receiveQuestions(questions,false));
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
      dispatch(receiveQuestions(questions,false));
      dispatch(receiveQuestions(questions,true));

      dispatch(stopLoading());
    });
  };
}
