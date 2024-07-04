import { SET_AUTHED_USER } from '../actions/authedUser';
import { CLEAR_AUTHED_USER } from '../actions/authedUser';


const initialState = {
    id: null,
    password: "",
    user:[],
    authenticated:false
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHED_USER:
        return {
          ...state,
          id: action.payload.id,
          password: action.payload.password,
          user:action.payload.user,
          authenticated:action.payload.authenticated

        };
     case CLEAR_AUTHED_USER:
            return {
              ...state,
              payload: initialState
            };
    
      default:
        return state;
    }
  }
  
  export default authReducer;