import "./InitialButtons.css";

import { connect } from "react-redux";
import {Fragment, useState, useRef} from "react";
import { Link } from "react-router-dom";
import {Routes,Route} from "react-router-dom";

const InitialButtons=({})=>{



   
    
    return <div className="InitialButtons">
<div className="button-container">
        <button className="round-button red-button"  ><Link to="/unanswered">Unanswered Questions</Link></button>
        <button className="round-button green-button" ><Link to="/answered">Answered Questions</Link></button>
    </div>
    

</div>}
const mapStateToProps = ({ authedUser}) => ({
    authedUser,
    
  });
  


export default connect()(InitialButtons)