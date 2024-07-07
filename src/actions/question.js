import {  saveQuestion } from "../backend/api";

import { _saveQuestion } from "../backend/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";
 function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question,
    };
  }
  export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return (dispatch) => {
      const questionData = {
        optionOneText,
        optionTwoText,
        author,
      };
  
      return _saveQuestion(questionData)
        .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
        .catch((error) => console.error('Error saving question:', error));
    };
  }