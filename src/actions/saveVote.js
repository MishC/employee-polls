import { _saveQuestionAnswer } from "../backend/_DATA";

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION_ANSWER_ERROR = 'SAVE_QUESTION_ANSWER_ERROR';

export function saveQuestionAnswer({ authedUser, qid, answer }) {
    return async (dispatch) => {
      try {
        await _saveQuestionAnswer({ authedUser, qid, answer });
        dispatch({
          type: SAVE_QUESTION_ANSWER,
          payload: { authedUser, qid, answer }
        });
      } catch (error) {
        dispatch({
          type: SAVE_QUESTION_ANSWER_ERROR,
          error
        });
      }
    };
  }
