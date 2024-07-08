import "./QuestionDetail.css";

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from "react";
import {capitalizeFirstLetter} from "../../helper/helper.js";
import Plotly from 'plotly.js-dist';
import { Navigate } from "react-router-dom";
import Results from "./Results.js";
import Vote from "./Vote.js";


const QuestionDetail = ({ questions,user }) => {
  
  
  const { question_id } = useParams();
  

  if (!questions) {
    return <div className="QuestionDetail-fail"><h2>Sorry, question not found</h2><br/>
          <div> <Link to="/"> <button className="back-button">Back</button></Link> </div>
          </div>;
  }
  const question=[...questions.answered, ...questions.unanswered].find(q=>q.id===question_id);

  return (
    <div className="QuestionDetail">

      <h1>Would you rather...</h1>      
      <h5>Question by: {question.author} on {new Date(question.timestamp).toLocaleString()}</h5>

      <ol type="A" className="question-option">
        <li><h4> {capitalizeFirstLetter(question.optionOne.text)}</h4></li>
        <li><h4> {capitalizeFirstLetter(question.optionTwo.text)} </h4></li>
      
      </ol>
      { !Object.keys(user.answers)
      .includes(question_id)?<Vote/>:
     <Results question={question}/>}

      <div> <Link to="/"> <button className="back-button">Back</button></Link> </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  questions: state.questions,
  user:state.user
});

export default connect(mapStateToProps)(QuestionDetail);
