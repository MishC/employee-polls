import { RECEIVE_QUESTIONS } from "../actions/uquestions";
import { ADD_QUESTION } from "../actions/question";

export default function receiveQuestions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.uquestions,
      };
      case ADD_QUESTION:
      const { question  } = action;
      console.log(question);
      //let optionOneText  = {}; let optionTwoText={};
        
    
      return {
        ...state,
        [action.question.id]: action.question,

      }
    default:
      return state;
  }
}