import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const QuestionDetail = ({ questions }) => {
  const { question_id } = useParams();
  const question = questions.all.find((q) => q.id === question_id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>{question.author}</h1>
      <p>{new Date(question.timestamp).toLocaleString()}</p>
      {/* Render more details as needed */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions,
});

export default connect(mapStateToProps)(QuestionDetail);
