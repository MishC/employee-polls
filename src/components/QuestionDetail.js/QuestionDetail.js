import "./QuestionDetail.css";
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from "../../helper/helper.js";
import Results from "./Results.js";
import Vote from "./Vote.js";
import Countdown from "../../helper/Countdown.js";

const QuestionDetail = ({ questions, user }) => {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", { state: { answered: true, isClicked: true } });
  };

  const question = questions ? questions[question_id] : null;


  if (!question || !user) {
    return (
      <div className="QuestionDetail-fail">
                <Countdown/>
<br/>
        <h2>Sorry, question not found</h2>
        <br />
        <div>
          <Link to={{ pathname: "/", state: { answered: true } }}>
            <button className="back-button">Back</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="QuestionDetail">
      <h1>Would you rather...</h1>
      <h5>Question by: {question.author} on {new Date(question.timestamp).toLocaleString()}</h5>

      <ol type="A" className="question-option">
        <li><h4>{capitalizeFirstLetter(question.optionOne.text)}</h4></li>
        <li><h4>{capitalizeFirstLetter(question.optionTwo.text)}</h4></li>
      </ol>
      <div style={{fontWeight:600}}>Answered by {[...new Set([...question.optionOne.votes,...question.optionTwo.votes])].length*100/4}%</div>


      {user.answers[question_id] ? (
        <Results question={question} question_id={question_id} />
      ) : (
        <Vote question={question} question_id={question_id} />
      )}

      <div>
        
          <button className="back-button" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, user }) => ({
  questions,
  user,
});

export default connect(mapStateToProps)(QuestionDetail);
