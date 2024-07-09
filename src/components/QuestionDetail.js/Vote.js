import "./Vote.css";
import React, { useState } from 'react';
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../../actions/saveVote";

const Vote = ({question, authedUser, saveQuestionAnswer}) => {

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
    return <h2 className="error"> Oops, question not found!</h2>;
  }

  
    return (<div className="Vote">
   
    <form onSubmit={handleSubmit}>
      <div>
      <label class="container">A
  <input type="radio" checked={selectedOption === 'optionOne'}
          onChange={handleChange} name="optionOne"/>
  <span class="checkmark"></span>
</label>
<label class="container">B
  <input type="radio" checked={selectedOption === 'optionTwo'}
          onChange={handleChange} name="optionTwo" />
  <span class="checkmark"></span>
</label>
      </div>
      <button type="submit" className="vote-button">Vote</button>
    </form>
  


    </div>)
}

const mapStateToProps = (state, question_id) => {
    const question = state.questions[question_id];
    const authedUser = state.authedUser;
  
    return {
      question,
      authedUser
    };
  };
  
  const mapDispatchToProps = {
    saveQuestionAnswer
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Vote)

