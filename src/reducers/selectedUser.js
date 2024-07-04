// reducers/selectedUser.js

import { SELECT_USER, CLEAR_SELECTED_USER } from "../actions/selectedUser";

const initialState = {
  selectedUser: null,
};

export default function selectedUser(state = initialState, action) {
  switch (action.type) {
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.user,
      };
    case CLEAR_SELECTED_USER:
      return {
        ...state,
        selectedUser: null,
      };
    default:
      return state;
  }
}
