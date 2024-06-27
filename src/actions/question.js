import {  saveQuestion } from "../backend/api";

export const ADD_QUESTION = "ADD_QUESTION";
 function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question,
    };
  }
  export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
  
      return saveQuestion({
        optionOneText, optionTwoText, authedUser
      })
        .then((question) => dispatch(addQuestion(question)))
        
    };
  }
  