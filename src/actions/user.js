
export const RECEIVE_USER = "RECEIVE_USER";

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user,
  };
}


