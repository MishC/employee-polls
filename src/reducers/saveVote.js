import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';

export default function users(state = {}, action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...((state[authedUser] && state[authedUser].answers) || {}),
            [qid]: answer,
          },
         // question:{}
        },
      };
    default:
      return state;
  }
}
