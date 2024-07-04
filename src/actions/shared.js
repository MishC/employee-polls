import { getUsers, getInitialData } from "../backend/api";
import { receiveUsers } from "./users";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";


export function authenticate(id,password,authenticated) {
   return (dispatch)=>  dispatch(setAuthedUser(id,password,authenticated))
}
export function getAllUsers() {
    return (dispatch) => {
      dispatch(startLoading()); // Dispatch loading start action
  
      return getUsers() // Fetch users from API (assuming it returns a promise)
        .then((users) => {
          dispatch(receiveUsers(users)); // Dispatch action to store users in Redux state
          dispatch(stopLoading()); // Dispatch loading stop action
          return users; // Return users data if needed
        })
        .catch((error) => {
          console.error("Failed to fetch users:", error);
          dispatch(stopLoading()); // Ensure loading is stopped on error
          throw error; // Re-throw the error to be handled where getAllUsers is called
        });
    };
  }



export function handleInitialData() {
  return (dispatch) => {
    dispatch(startLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(stopLoading());
    });
  };
}
