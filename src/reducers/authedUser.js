import { SET_AUTHED_USER } from '../actions/authedUser';
import { CLEAR_AUTHED_USER } from '../actions/authedUser';


const initialState = {
    id: null,
    password: "",
    user:[],
    authenticated:false
  };
  
  function authReducer(state = {}, action) {
    switch (action.type) {
      case SET_AUTHED_USER:
        return {
          ...state,
          id: action.payload.id,
          password: action.payload.password,
          authenticated:action.payload.authenticated

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