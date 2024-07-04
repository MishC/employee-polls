import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import Nav from "./Nav/Nav";


const Dashboard=({authedUser})=> {
    console.log(authedUser);
  
    return (
        <div className="">
        <Nav/>
        {authedUser?
      <Fragment>
        <p>User ID: {authedUser.user.id}</p>
        <p>Name: {authedUser.user.name} </p>
      </Fragment>:  <Fragment>    <Link>You are not signed in!</Link></Fragment>}

    </div>);
  }
  const mapStateToProps = ({ authedUser}) => ({
    authedUser: authedUser,
   // users:users[id]
    
  });
  
  export default connect(mapStateToProps)(Dashboard);