import "./Uanswered.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Table from "../Table/Table";
import { getUnansweredQuestions } from "../../actions/shared";

const Unanswered = ({ user, questions, dispatch }) => {
  

  return (
    <div className="Unanswered">
     {/* <h2>Unanswered Polls</h2>*/}
      {questions.unanswered ? (
       
          <Table questions={questions.unanswered} />
         
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authedUser.user,
  questions: state.questions,
});

export default connect(mapStateToProps)(Unanswered);
