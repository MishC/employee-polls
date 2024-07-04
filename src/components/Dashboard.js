import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";


const Dashboard=({authedUser})=> {
    console.log(authedUser);
    if (!authedUser) {
        return( 
        <Fragment>
      <Link to="/">You are not signed in!</Link>; </Fragment>)}
  
    return (
      <Fragment>
        <p>User ID: {authedUser.user.name}</p>
        <p>Name: </p>
        {/* Other properties */}
      </Fragment>
    );
  }
  const mapStateToProps = ({ authedUser, authenticate}) => ({
    authedUser: authedUser,
   // users:users[id]
    
  });
  
  export default connect(mapStateToProps)(Dashboard);