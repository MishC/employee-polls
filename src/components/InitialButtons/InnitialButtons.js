import "./InitialButtons.css";

import { connect } from "react-redux";
import {Fragment, useState, useRef} from "react";
import { Link } from "react-router-dom";
import {Routes,Route} from "react-router-dom";

const InitialButtons=({})=>{
  const unanswered = useRef('');
  const answered = useRef('');
 

//const handleOnClick =(e)=>{e.prevent.default}

   
    
    return <div className="InitialButtons">
<div className="button-container link-style">
        <Link to="/unanswered" ref={unanswered} className="link-style" ><button className="round-button red-button">Unanswered Questions</button></Link>
       <Link to="/answered" ref={answered} className="link-style"> <button className="round-button green-button" >Answered Questions</button></Link>
    </div>
    

</div>}
const mapStateToProps = ({ authedUser}) => ({
    authedUser,
    
  });
  


export default connect()(InitialButtons)