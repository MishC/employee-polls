export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function saveQuestionAnswerAction({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}


