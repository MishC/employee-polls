// middleware/authCheck.js

import { SET_AUTHED_USER } from '../actions/authedUser';
import { getAllUsers } from '../actions/shared';

const authCheck = store => next => async action => {
  if (action.type === SET_AUTHED_USER) {
   

     

    } 
  
  return next(action);
};

export default authCheck;
