import "./Dashboard.css"

import {  useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import InnitialButtons from "../InitialButtons/InnitialButtons";

    import Polls from "../Polls/Polls";



const Dashboard=({user})=> {
   // const [avatar,setAvatar]=useState('');
    const [answered, setAnswered]=useState();
    const {name,id} = user;
    
    const setAnswer =(answer)=>{setAnswered(answer)};
    
  return (
        <div className="Dashboard">
       
      <div className="dashboard-container">
        
        
         <img src={`/images/${id}.png`} alt={`${name}'s avatar`} width={200}/>
        <h1>Welcome, {name}! </h1>
    <InnitialButtons setAnswer={setAnswer}/>   
         {user.id&&<Polls answered={answered} />}
      </div>

    </div>)
  }
  const mapStateToProps = ({user}) => ({
    user
  });
  
  export default connect(mapStateToProps)(Dashboard);