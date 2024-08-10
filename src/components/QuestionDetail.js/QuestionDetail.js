import "./QuestionDetail.css";
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { capitalizeFirstLetter } from "../../helper/helper.js";
import { checkVotes } from "../../actions/checkVotes.js";
import Results from "./Results.js";
import Vote from "./Vote.js";

const QuestionDetail = ({ questions, user, dispatch }) => {
  const { question_id } = useParams();
  const navigate = useNavigate();

  const question = questions ? questions[question_id] : null;

  /*useEffect(() => {
    if (question && user) {
      const answer = user.answers[question_id];
      if (answer === 'optionOne' && !question.optionOne.votes.includes(user.id)) {
        dispatch(checkVotes(question_id, 'optionOne', user.id));
      } else if (answer === 'optionTwo' && !question.optionTwo.votes.includes(user.id)) {
        dispatch(checkVotes(question_id, 'optionTwo', user.id));
      }
    }
  });*/

  if (!question || !user) {
    return (
      <div className="QuestionDetail-fail">
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

      {user.answers[question_id] ? (
        <Results question={question} question_id={question_id} />
      ) : (
        <Vote question={question} question_id={question_id} />
      )}

      <div>
        <Link to={{ pathname: "/", state: { answered: true, isClicked: true } }}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, user }) => ({
  questions,
  user,
});

export default connect(mapStateToProps)(QuestionDetail);
