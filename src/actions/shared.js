import { getUsers, getInitialData } from "../backend/api";
import { receiveUsers } from "./users";
import { startLoading, stopLoading } from "./loading";
import { setAuthedUser } from "./authedUser";


export function authenticate(id,password, users,authenticated){

    return (dispatch) => {
        dispatch(startLoading());
        
   Object.values(users).map(user => Object.values(user)).find(user => user.includes(password) && user.includes(id))
        ? dispatch(setAuthedUser(id, password, users[id], true)):console.error("Invalid user or password"); 
        setTimeout(()=> dispatch(stopLoading()),1000)
}}

export function getAllUsers() {
    return (dispatch) => {
      dispatch(startLoading()); 
  
      return getUsers() 
        .then((users) => {
          dispatch(receiveUsers(users)); 
          dispatch(stopLoading()); 
          return users; 
        })
        .catch((error) => {
          console.error("Failed to fetch users:", error);
          dispatch(stopLoading()); 
          throw error; 
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
