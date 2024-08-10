export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";



export function receiveQuestions(questions,answered,user) {
  return {
    type: RECEIVE_QUESTIONS,
    payload:{questions,answered,user},
    
  };
  
}