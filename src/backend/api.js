import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
  } from './_DATA.js'


  
export async function getUsers() {
    const users = await _getUsers();
    return users;
  }

  export async function getUser(id){
   try{
    const users =await _getUsers();
    return users[id]}
    catch (error) {console.log("Fail login, try again!")}
  }
  export async function getQuestions() {
    const questions = await _getQuestions();
    return questions;
  }
  
  export async function getInitialData () {
    const [users, questions] = await Promise.all([
          _getUsers(),
          _getQuestions(),
      ]);
      return ({
          users,
          questions,
      });
  }

  
  export function saveQuestion (question) {
    return _saveQuestion(question)
  }