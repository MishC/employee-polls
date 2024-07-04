// actions/users.js

export const RECEIVE_USERS = "RECEIVE_USERS";
export const SELECT_USER = "SELECT_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function selectUser(users, id,password) {
  const selectedUser = Object.values(users).find(user => user.id === id&&(user.password===password));
  return {
    type: SELECT_USER,
    user: selectedUser,
  };
}
