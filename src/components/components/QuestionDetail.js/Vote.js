import "./Vote.css";
import React, { useState } from 'react';
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../../actions/shared";

const Vote = ({ question, authedUser, saveQuestionAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      saveQuestionAnswer({ authedUser, qid: question.id, answer: selectedOption });
    }
  };

  if (!question) {
    return <h2 className="error">Oops, question not found!</h2>;
  }

  return (
    <div className="Vote">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="container">Option A
            <input
              type="radio"
              value="optionOne"
              checked={selectedOption === 'optionOne'}
              onChange={handleChange}
              name="options"
            />
            <span className="checkmark"></span>
          </label>
          <label className="container">Option B
            <input
              type="radio"
              value="optionTwo"
              checked={selectedOption === 'optionTwo'}
              onChange={handleChange}
              name="options"
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <button type="submit" className="vote-button">Vote</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  authedUser:user
});

const mapDispatchToProps = {
  saveQuestionAnswer
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);