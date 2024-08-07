//import {  saveQuestionAnswer } from "../backend/api";

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    payload: {
      authedUser,
      qid,
      answer,
    },
  };
}


/*Here one have all users in the state:
export  function handleSaveAnswer({ authedUser, qid, answer  })
{
return  (dispatch) => { 
return saveQuestionAnswer({ authedUser, qid, answer  })
    .then((data) => dispatch(saveAnswer(data)))
    .catch((error) => console.error('Error saving question:', error));
}
}*/


