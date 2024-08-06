export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";



export function receiveQuestions(questions,answered) {
  return {
    type: RECEIVE_QUESTIONS,
    payload:{questions,answered},
    
  };
  
}