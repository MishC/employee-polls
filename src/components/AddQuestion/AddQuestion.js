// components/AddQuestion.js

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleAddQuestion } from '../../actions/question';

const AddQuestion = ({ handleAddQuestion }) => {
  const [questionData, setQuestionData] = useState({
    optionOneText: '',
    optionTwoText: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText, author } = questionData;

    // Call the handleAddQuestion action creator
    handleAddQuestion({ optionOneText, optionTwoText, author });

    // Reset form fields after submission
    setQuestionData({
      optionOneText: '',
      optionTwoText: '',
      author: '',
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
        <label>
          Author:
          <input
            type="text"
            value={questionData.author}
            onChange={(e) =>
              setQuestionData({ ...questionData, author: e.target.value })
            }
            required
          />
        </label>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default connect(null, { handleAddQuestion })(AddQuestion);
