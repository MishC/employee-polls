import "./Dashboard.css"

import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {Routes,Route} from "react-router-dom";

import Nav from "../Nav/Nav";
import InnitialButtons from "../InitialButtons/InnitialButtons";
import Unanswered from "../Unanswered/Unanswered";
import Answered from "../Answered/Answered";
import { getAllQuestions } from "../../actions/shared";



const Dashboard=({authedUser,user,dispatch})=> {
    const {id,name} =user;
    const [avatar,setAvatar]=useState('');
    const [answered, setAnswered]=useState(false);

    /*useEffect(() => {
      dispatch(getAllQuestions())
    }, [dispatch]);*/

    const setAnswer =(answer)=>{setAnswered(answer);};
  
    return (
        <div className="Dashboard">
        <Nav/>
        {authedUser?
      <div className="dashboard-container">
        
        
         <img src={`/images/${id}.png`} alt={`${name}'s avatar`} width={200}/>}
        <h1>Welcome, {name}! </h1>
           <InnitialButtons/> 
         <Routes>
          {!answered?
          <Route path="/unanswered" element={<Unanswered />} />:
          <Route path="/answered" element={<Answered />} />}
        </Routes>
      </div>:  <Fragment>    <Link>You are not signed in!</Link></Fragment>}

    </div>);
  }
  const mapStateToProps = ({ authedUser,user}) => ({
    authedUser: authedUser,
    user:user
   // users:users[id]
    
  });
  
  export default connect(mapStateToProps)(Dashboard);