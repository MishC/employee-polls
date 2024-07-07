import { RECEIVE_USER } from "../actions/user";

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
