
import Table from "../Table/Table";
import { connect } from "react-redux";

const Answered = ({user,questions,dispatch}) => {
   
    return (
        <div className="Answered">
       {questions.answered&&     <Table questions={Object.values(questions.answered)} answered={true}/>}

             </div>
    )
}
const mapStateToProps = ({ user,questions}) => ({
    user,
    questions
    

  });
export default connect(mapStateToProps)(Answered);