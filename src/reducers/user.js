import { RECEIVE_USER} from "../actions/user";
import { ADD_QUESTION } from '../actions/question';
import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';

const initialState = {
  id: null,
  name: null,
  avatarURL: null,
  answers: {},
  questions: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      const { password, ...userWithoutPassword } = action.user;

      return {
        ...state,
        ...userWithoutPassword,
      };
  
      case ADD_QUESTION:
        return {...state,
          questions: [...state.questions, action.question.id]

        };

    case SAVE_QUESTION_ANSWER:
      const {qid, answer } = action.payload;

      return {
        ...state,
        answers: {
          ...state.answers,
          [qid]: answer,
        },
      };

    default:
      return state;
  }
}
