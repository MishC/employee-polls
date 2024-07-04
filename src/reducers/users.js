import { RECEIVE_USERS, SELECT_USER } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.user,
      };
    default:
      return state;
  }
}
