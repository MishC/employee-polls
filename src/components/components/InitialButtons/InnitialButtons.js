import "./InitialButtons.css";

import { connect } from "react-redux";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { getUnansweredQuestions,getAnsweredQuestions } from "../../actions/shared";

const InitialButtons = ({ setAnswer,user,dispatch }) => {
  const unanswered = useRef(null);
  const answered = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

 useEffect(() => 
   
        {if (user) {
           dispatch(getUnansweredQuestions(user));
           dispatch(getAnsweredQuestions(user))}}
        
    , [dispatch]);
  const handleOnClick = (e,type) => {
    //e.prevent.default;
    
    if (type === "unanswered") {
      setAnswer(false); 
      setIsClicked(false);
     
    } else if (type === "answered") {
      setAnswer(true); 
      setIsClicked(true);

    }
  };

  return (
    <div className="InitialButtons">
      <div className="button-container link-style">
        
          <button className={`round-button red-button ${isClicked ? "" : "active"}`} onClick={(e)=>handleOnClick(e,"unanswered")}>Unanswered Polls</button>
       
          <button className={`round-button green-button ${isClicked ?  "active":""}`} onClick={(e)=>handleOnClick(e,"answered")}>Answered Polls</button>

      </div>
    
      
    </div>
  );
};

const mapStateToProps = ({ user}) => ({user});

export default connect(mapStateToProps)(InitialButtons);
