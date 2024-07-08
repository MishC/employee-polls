import "./Uanswered.css";
import { connect } from "react-redux";
import Table from "../Table/Table";

const Unanswered = ({ user, questions, dispatch }) => {
  

  return (
    <div className="Unanswered">
    
      {questions.unanswered ? (
       
          <Table questions={questions.unanswered} answered={false}/>
         
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
