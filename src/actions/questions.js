export const RECEIVE_AQUESTIONS = "RECEIVE_AQUESTIONS";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_UQUESTIONS = "RECEIVE_UQUESTIONS";



export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
  
}


export function receiveUQuestions(uquestions) {
    return {
      type: RECEIVE_UQUESTIONS,
      payload:{uquestions},
    };
    
  }

  export function receiveAQuestions(aquestions) {
    return {
      type: RECEIVE_AQUESTIONS,
      payload:{aquestions},
    };
    
  }

 