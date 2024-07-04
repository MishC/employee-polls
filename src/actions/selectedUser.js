// actions/selectedUser.js

export const SELECT_USER = "SELECT_USER";
export const CLEAR_SELECTED_USER = "CLEAR_SELECTED_USER";

export function selectUser(user) {
  return {
    type: SELECT_USER,
    user,
  };
}

export function clearSelectedUser() {
  return {
    type: CLEAR_SELECTED_USER,
  };
}
