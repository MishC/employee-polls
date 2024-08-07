import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION } from '../actions/question';
import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';

const initialState = {};

export default function receiveQuestions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.payload.questions.reduce((acc, question) => {
          acc[question.id] = {
            ...question,
            answered: action.payload.answered || false,
          };
          return acc;
        }, {})
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
          answered: false,
        },
      };

    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;

      // Check if the question exists in the state
      const question = state[qid];
      if (!question) {
        console.error(`Question with id ${qid} not found in state`);
        return state;
      }

      return {
        ...state,
        [qid]: {
          ...question,
          answered: true,
          [answer]: {
            ...question[answer],
            votes: (question[answer]?.votes || []).concat(authedUser),
          },
        },
      };

    default:
      return state;
  }
}
