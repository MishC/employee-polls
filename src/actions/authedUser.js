
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const CLEAR_AUTHED_USER="CLEAR_AUTHED_USER";

export function setAuthedUser(id,error) {
  return {
    type: SET_AUTHED_USER,
    payload:{id,error
   }
  }}

  export function clearAuthedUser() {
    return {
      type: CLEAR_AUTHED_USER,
    };
  }

  