import "./InitialButtons.css";

import { connect } from "react-redux";
import { useState, useRef,useEffect } from "react";
import { useLocation } from 'react-router-dom';


const InitialButtons = ({ setAnswer }) => {

  const [isClicked, setIsClicked] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.isClicked) {
      setIsClicked(location.state.isClicked);
    }
  }, [location.state]);
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