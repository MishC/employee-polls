import "./AddQuestion.css";
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { handleAddQuestion } from '../../actions/question';

const AddQuestion = ({ handleAddQuestion, author_id }) => {
  const [questionData, setQuestionData] = useState({
    optionOneText: '',
    optionTwoText: '',
    author: author_id,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
       console.log(questionData);
    handleAddQuestion(questionData);

    setQuestionData({
      optionOneText: '',
      optionTwoText: '',
      author: ''
    });
    navigate("/");
  };

  return (
    <div className="AddQuestion">


      <h2>Would you rather...</h2>
       <h4>(Add options)</h4>     
      <div className="add-input-container">
      <form onSubmit={handleSubmit}>
        <label>
          Option A:
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
          Option B:
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
      <div> <button onClick={() => navigate(-1)} className="back-button">Back</button> 
                       
        <button type="submit" className="add-button">Add Question</button></div>
      </form>
      </div>
    </div>
  );
};
const mapStateToProps=({authedUser})=>({
     author_id:authedUser.id,
});

export default connect(mapStateToProps, { handleAddQuestion })(AddQuestion);
