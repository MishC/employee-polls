import { RECEIVE_USER } from "../actions/user";
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

    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;

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
