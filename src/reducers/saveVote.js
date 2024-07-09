import { SAVE_QUESTION_ANSWER } from "../actions/saveVote";

// reducers/questions.js
import { SAVE_QUESTION_ANSWER } from '../actions/actionTypes';

const initialState = {
  questions: {},
};

export default function saveVote(state = initialState, action) {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;

      return {
        ...state,
        questions: {
          ...state.questions,
          [qid]: {
            ...state.questions[qid],
            [answer]: {
              ...state.questions[qid][answer],
              votes: state.questions[qid][answer].votes.concat(authedUser)
            }
          }
        },
        users: {
          ...state.users,
          [authedUser]: {
            ...state.users[authedUser],
            answers: {
              ...state.users[authedUser].answers,
              [qid]: answer
            }
          }
        }
      };

   
    default:
      return state;
  }
}
