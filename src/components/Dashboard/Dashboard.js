import "./Dashboard.css"

import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {Routes,Route} from "react-router-dom";

import Nav from "../Nav/Nav";
import InnitialButtons from "../InitialButtons/InnitialButtons";
import Unanswered from "../Unanswered/Unanswered";
import Answered from "../Answered/Answered";




const Dashboard=({authedUser})=> {
    const {id,name} =authedUser.user;
    const [avatar,setAvatar]=useState('');

    useEffect(() => {
      const imageName = `${id}.png`; // Assuming image name is the same as the user id
      setAvatar(`/images/${imageName}`);
    }, [id]);
  
    return (
        <div className="Dashboard">
        <Nav/>
        {authedUser?
      <div className="dashboard-container">
        
        
        {avatar && <img src={avatar} alt={`${name}'s avatar`} width={200}/>}
        <h1>Welcome, {name}! </h1>
           <InnitialButtons/> 
         <Routes>
          <Route path="/unanswered" element={<Unanswered />} />
          <Route path="/answered" element={<Answered />} />
        </Routes>
      </div>:  <Fragment>    <Link>You are not signed in!</Link></Fragment>}

    </div>);
  }
  const mapStateToProps = ({ authedUser}) => ({
    authedUser: authedUser,
   // users:users[id]
    
  });
  
  export default connect(mapStateToProps)(Dashboard);