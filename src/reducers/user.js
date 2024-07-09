import { RECEIVE_USER } from "../actions/user";
import {SAVE_QUESTION_ANSWER} from '../actions/saveVote';

export default function user(state = {}, action) {
  switch (action.type) {
   
    case RECEIVE_USER: 
    const { password, ...userWithoutPassword } = action.user;

      return {
        ...state,
       ...userWithoutPassword
      };
    
    default:
      return state;
  }
}
