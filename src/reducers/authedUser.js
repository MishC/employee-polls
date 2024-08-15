import { SET_AUTHED_USER } from '../actions/authedUser';
import { CLEAR_AUTHED_USER } from '../actions/authedUser';


const initialState = {
    id: null,
  
  };
  
  function authReducer(state = {}, action) {
    switch (action.type) {
      case SET_AUTHED_USER:
        return {
          ...state,
          id: action.payload.id,
          error:action.payload.error
         

        };
     case CLEAR_AUTHED_USER:
            return {
              initialState
            };
    
      default:
        return state;
    }
  }
  
  export default authReducer;