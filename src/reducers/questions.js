import { RECEIVE_AQUESTIONS, RECEIVE_QUESTIONS, RECEIVE_UQUESTIONS } from '../actions/questions';
import  {ADD_QUESTION} from '../actions/question';

export default function receiveQuestions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_UQUESTIONS:
      return {
        ...state,
        unanswered: action.payload.uquestions,
      };
    case RECEIVE_AQUESTIONS:
      return {
        ...state,
        answered: action.payload.aquestions,
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        all: action.questions,
      };
      case ADD_QUESTION:
        return {
          ...state,
          questions: {
            ...state.questions,
            [action.question.id]: action.question,
          },
          unanswered: [...state.unanswered, action.question],
        };
    default:
      return state;
  }
}
