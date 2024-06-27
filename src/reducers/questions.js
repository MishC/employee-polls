import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_QUESTION } from "../actions/question";

export default function receiveQuestions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
      case ADD_QUESTION:
      const { question  } = action;
      console.log(question);
      //let optionOneText  = {}; let optionTwoText={};
        
      

      return {
        ...state,
        [action.question.id]: action.tweet,

      }
    default:
      return state;
  }
}