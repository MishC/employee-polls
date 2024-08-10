export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS="RECEIVE_ALL_USERS";
export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}

export function receiveAllUsers(users) {
  return{
    type: RECEIVE_ALL_USERS,
    users,
  
  }
}