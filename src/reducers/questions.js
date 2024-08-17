import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION } from '../actions/question';
import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';

const initialState = {};

export default function receiveQuestions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      const { user, questions } = action.payload;
      const { answers } = user;
    
      if (action.payload.answered) {
        return {
          ...state,
          ...questions.reduce((acc, question) => {
            const selectedOption = answers[question.id]; 
            
            if (selectedOption==="optionOne" && question.optionOne?.votes) {
              acc[question.id] = {
                ...question,
                answered: true, 
                [selectedOption]: {
                  ...question[selectedOption],
                  votes: ([...question.optionOne.votes].includes(user.id)||
                  [...question.optionTwo.votes].includes(user.id))?
                  [...question[selectedOption].votes] 
                  : [...question[selectedOption].votes, user.id], 

                },
              };
            } 
            else if (selectedOption==="optionTwo"&& question.optionTwo?.votes)
              {
                acc[question.id] = {
                  ...question,
                  answered: true, 
                  [selectedOption]: {
                    ...question[selectedOption],
                    votes: ([...question.optionTwo.votes].includes(user.id)||
                    [...question.optionOne.votes].includes(user.id))?
                    [...question[selectedOption].votes] 
                    : [...question[selectedOption].votes, user.id], 
  
                  },}

              }
            
            else {
              acc[question.id] = {
                ...question,
                answered: false, 
              };
            }
    
            return acc;
          }, {})
        };
      } else {
        return {
          ...state,
          ...questions.reduce((acc, question) => {
            acc[question.id] = {
              ...question,
              answered: false, 
            };
            return acc;
          }, {})
        };
      }
    
    

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: {
          ...action.question,
          answered: false,
        },
      };

    case SAVE_QUESTION_ANSWER:
      const { authedUser, qid, answer } = action.payload;

      const question = state[qid];
      if (!question) {
        console.error(`Question with id ${qid} not found in state`);
        return state;
      }

      return {
        ...state,
        [qid]: {
          ...question,
          answered: true,
          [answer]: {
            ...question[answer],
             votes:[...question[answer].votes,authedUser],
          },
        },
      };
      
        
    default:
      return state;
  }
}
