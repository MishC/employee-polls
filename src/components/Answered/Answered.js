
import { connect } from "react-redux";
import { useState, Fragment } from "react";
import { getAllQuestions } from "../../actions/shared";
const Answered = (Answered) => {

   
    return (
        <div className="Answered">
            <h1>  Answered Questions  </h1>

             </div>
    )
}
const mapStateToProps = ({ authedUser, questions}) => ({
    
    user:authedUser.user,
    answers:authedUser.user.answers,
    questions,

  });
export default connect(mapStateToProps)(Answered);