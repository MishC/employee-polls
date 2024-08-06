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

  export async function authenticateUser(id,password){
    const users=await _getUsers();
   return Object.values(users).map(user => Object.values(user)).find(user =>
      user.includes(id)&& user.includes(password))?users[id]:
   console.log("Fail login, try again!")
  }
  export async function getUserById(id){
    const users=await _getUsers();
    return users[id]
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

  
  export async function saveQuestion (question) {
   return await _saveQuestion(question);
  }

  export async function  saveQuestionAnswer ({ authedUser, qid, answer }) {
    return await _saveQuestionAnswer ({ authedUser, qid, answer });
  }