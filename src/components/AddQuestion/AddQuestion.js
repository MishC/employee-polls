import "./AddQuestion.css";
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import { handleAddQuestion } from '../../actions/question';

const AddQuestion = ({ handleAddQuestion, author_id }) => {
  const [questionData, setQuestionData] = useState({
    optionOneText: '',
    optionTwoText: '',
    author: author_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //const { optionOneText, optionTwoText, author_id } = questionData;
       console.log(questionData);
    handleAddQuestion(questionData);

    setQuestionData({
      optionOneText: '',
      optionTwoText: '',
      author: ''
    });
  };

  return (
    <div className="AddQuestion">
      <Nav/>
      <h2>Would you rather...</h2>

      <div className="add-input-container">
      <form onSubmit={handleSubmit}>
        <label>
          Option One:
          <input
            type="text"
            value={questionData.optionOneText}
            onChange={(e) =>
              setQuestionData({ ...questionData, optionOneText: e.target.value })
            }
            className="add-input"
            required
          />
        </label>
        <label>
          Option Two:
          <input
            type="text"
            value={questionData.optionTwoText}
            onChange={(e) =>
              setQuestionData({ ...questionData, optionTwoText: e.target.value })
            }
             className="add-input"
            required
          />
        </label>
       <br/>
        <button type="submit" className="add-button">Add Question</button>
      </form>
      </div>
    </div>
  );
};
const mapStateToProps=({authedUser})=>({
     author_id:authedUser.id,
});

export default connect(mapStateToProps, { handleAddQuestion })(AddQuestion);
