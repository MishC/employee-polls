import "./Uanswered.css";
import { connect } from "react-redux";
import Table from "../Table/Table";

const Unanswered = ({  questions }) => {
  

  return (
    <div className="Unanswered">
    
      {questions&&
       
          <Table questions={Object.values(questions)} answered={false}/>
         
      
      }
    </div>
  );
};

const mapStateToProps = ({ user,questions}) => ({
  user,
  questions: Object.values(questions).filter(q => q.answered === false),

});

export default connect(mapStateToProps)(Unanswered);
