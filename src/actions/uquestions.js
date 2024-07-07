export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(uquestions) {
    return {
      type: RECEIVE_QUESTIONS,
      uquestions,
    };
    
  }

 