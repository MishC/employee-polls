// middleware/authCheck.js

import { SET_AUTHED_USER } from '../actions/authedUser';
import { getAllUsers } from '../actions/shared';

const authCheck = store => next => async action => {
  if (action.type === SET_AUTHED_USER) {
    try {
      const { payload } = action;
      if (!payload || !payload.id || !payload.password) {
        throw new Error('Invalid payload structure for SET_AUTHED_USER');
      }

      const { id, password } = payload;

      // Fetch all users if not already in the state
      if (!Object.keys(store.getState().users).length) {
        await store.dispatch(getAllUsers());
      }

      const users = store.getState().users;
      console.log(users);
      const user =  Object.values(users).filter(user=>((user.id===id)&&(user.password===password)));
      

      // Update action.payload with authentication status
      action.payload.authenticated = !!user;
    } catch (error) {
      console.error('Failed to authenticate user:', error);
      action.payload.authenticated = false;
    }
  }
  return next(action);
};

export default authCheck;
