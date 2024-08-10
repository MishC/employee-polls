import { RECEIVE_QUESTIONS } from '../actions/questions';
import { ADD_QUESTION } from '../actions/question';
import { SAVE_QUESTION_ANSWER } from '../actions/saveVote';
import { CHECK_VOTES } from '../actions/checkVotes';


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
            
            if (selectedOption && question[selectedOption]?.votes) {
              acc[question.id] = {
                ...question,
                answered: true, 
                [selectedOption]: {
                  ...question[selectedOption],
                  votes: [...question[selectedOption].votes].includes(user.id)?
                  [...question[selectedOption].votes] 
                  : [...question[selectedOption].votes, user.id], 
                },
              };
            } else {
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
      case CHECK_VOTES: {
        const { questionId, option, userId } = action.payload;
        const question = state[questionId];
        console.log(question);
        
    if (!question) {
      return state; 
      
  }
        if (question&&option === 'optionOne' && !question.optionOne.votes.includes(userId)) {
          return {
            ...state,
            [questionId]:{
                 ...question,
                 optionOne: {
                  ...question.optionOne,
                  votes: [...question.optionOne.votes, userId],
            },}
            
          }}
          if (option === 'optionTwo' && !question.optionTwo.votes.includes(userId))
          {return {
            ...state,
            [questionId]:{
                 ...question,
                 optionTwo: {
                  ...question.optionTwo,
                  votes: [...question.optionTwo.votes, userId],
            },}
            
          }

          }
          break;
        }
        
    default:
      return state;
  }
}
