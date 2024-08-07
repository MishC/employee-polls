import "./Dashboard.css"

import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import {Routes,Route} from "react-router-dom";

import InnitialButtons from "../InitialButtons/InnitialButtons";
import Unanswered from "../Unanswered/Unanswered";
import Answered from "../Answered/Answered";
    import { getUnansweredQuestions } from "../../actions/shared";



const Dashboard=({user,dispatch})=> {
    const [avatar,setAvatar]=useState('');
    const [answered, setAnswered]=useState(false);
    const {name,id} = user;
    
    const setAnswer =(answer)=>{setAnswered(answer)};
    
  return (
        <div className="Dashboard">
       
      <div className="dashboard-container">
        
        
         <img src={`/images/${id}.png`} alt={`${name}'s avatar`} width={200}/>
        <h1>Welcome, {name}! </h1>
    <InnitialButtons setAnswer={setAnswer}/>   
         {answered&&user.id?<Answered /> :<Unanswered />}
      </div>

    </div>)
  }
  const mapStateToProps = ({user}) => ({
    user
  });
  
  export default connect(mapStateToProps)(Dashboard);