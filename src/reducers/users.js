import { RECEIVE_ALL_USERS } from "../actions/user"
const initialState = {
    
  };
export default function users(state = initialState, action) {

    switch (action.type) {

case RECEIVE_ALL_USERS:
        return {
          ...state,
     ...Object.values(action.users).map(u=>{return [u.name,u.questions.length,
        Object.keys(u.answers).length]}).sort((a, b) => (b[1]+b[2]) - (a[1]+a[2]))

       }
default:
      return state;
    }
    

}