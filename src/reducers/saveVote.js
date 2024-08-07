// reducers/saveVote.js
import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';

const initialState = {
  user: {
    answers: {},
    // other user properties
  },
  questions: {},
};

function saveVote(state = initialState, action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;
      const qidKey = JSON.stringify(qid); 

      return {
        ...state,
        user: {
          ...state.user,
          answers: {
            ...state.user.answers,
            [qidKey]: answer,
          },
        },
        questions: {
          ...state.questions,
          [qidKey]: {
            ...state.questions[qidKey],
            answered: true,
            [answer]: {
              ...state.questions[qidKey]?.[answer],
              votes: (state.questions[qidKey]?.[answer]?.votes || []).concat(authedUser),
            },
          },
        },
      };
    default:
      return state;
  }
}

export default saveVote;