import "./InitialButtons.css";

import { connect } from "react-redux";
import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Unanswered from "../Unanswered/Unanswered";
import Answered from "../Answered/Answered";

const InitialButtons = ({ setAnswer }) => {
  const unanswered = useRef(null);
  const answered = useRef(null);
  //const [isAnswered, setIsAnswered] = useState(false);


  const handleOnClick = (e,type) => {
    //e.prevent.default;
    if (type === "unanswered") {
      setAnswer(false); 
    } else if (type === "answered") {
      setAnswer(true); 
    }
  };

  return (
    <div className="InitialButtons">
      <div className="button-container link-style">
        
          <button className="round-button red-button" onClick={(e)=>handleOnClick(e,"unanswered")}>Unanswered Polls</button>
       
          <button className="round-button green-button" onClick={(e)=>handleOnClick(e,"answered")}>Answered Polls</button>

      </div>
    
      
    </div>
  );
};

const mapStateToProps = ({ }) => ({});

export default connect(mapStateToProps)(InitialButtons);
