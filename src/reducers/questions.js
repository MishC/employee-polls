import { RECEIVE_QUESTIONS } from '../actions/questions';
import  {ADD_QUESTION} from '../actions/question';
import {SAVE_QUESTION_ANSWER} from '../actions/saveVote';

export default function receiveQuestions(state={}, action) {
  switch (action.type) {
      case RECEIVE_QUESTIONS:
        return {
          ...state,
          
            ...state.questions,
            ...action.payload.questions.reduce((acc, question) => {
              acc[question.id] = {
                ...question,
                answered: action.payload.answered,
              };
              return acc;
            }, {})
          
        };
            
      
      case ADD_QUESTION:
        return {
          ...state,
          questions: {
            ...state.questions,
            [action.question.id]: action.question,
          },
          unanswered: [...state, action.question],
        };
    default:
      return state;
  }
}
