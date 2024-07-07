import "./InitialButtons.css";

import { connect } from "react-redux";
import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Unanswered from "../Unanswered/Unanswered";
import Answered from "../Answered/Answered";

const InitialButtons = ({ setAnswer }) => {
  const unanswered = useRef(null);
  const answered = useRef(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOnClick = (type) => {
    //e.prevent.default;
    if (type === "unanswered") {
     // setIsAnswered(false);
      setAnswer(false); // Call the parent callback if needed
    } else if (type === "answered") {
      //setIsAnswered(true);
      setAnswer(true); // Call the parent callback if needed
    }
  };

  return (
    <div className="InitialButtons">
      <div className="button-container link-style">
        
          <button className="round-button red-button" onClick={()=>handleOnClick("unanswered")}>Unanswered Polls</button>
       
          <button className="round-button green-button" onClick={()=>handleOnClick("answered")}>Answered Polls</button>

      </div>
    
      
    </div>
  );
};

const mapStateToProps = ({ }) => ({});

export default connect(mapStateToProps)(InitialButtons);
