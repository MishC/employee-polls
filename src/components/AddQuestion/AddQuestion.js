// components/AddQuestion.js

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../../actions/question';

const AddQuestion = ({ handleAddQuestion, author_id }) => {
  const [questionData, setQuestionData] = useState({
    optionOneText: '',
    optionTwoText: '',
    author: author_id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText, author_id } = questionData;
       console.log(questionData);
    handleAddQuestion({ optionOneText, optionTwoText, author_id });

    setQuestionData({
      optionOneText: '',
      optionTwoText: '',
      author: ''
    });
  };

  return (
    <div className="add-question">
      <h2>Add New Question</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Option One:
          <input
            type="text"
            value={questionData.optionOneText}
            onChange={(e) =>
              setQuestionData({ ...questionData, optionOneText: e.target.value })
            }
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
            required
          />
        </label>
       
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};
const mapStateToProps=({state})=>({
     author_id:state.authedUser.id,
});

export default connect(mapStateToProps, { handleAddQuestion })(AddQuestion);
