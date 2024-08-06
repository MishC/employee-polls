
import Table from "../Table/Table";
import { connect } from "react-redux";

const Answered = ({questions}) => {
   
    return (
        <div className="Answered">
       {questions&&    
        <Table questions={questions} answered={true}/>}

             </div>
    )
}
const mapStateToProps = ({ user,questions}) => ({
    user,
    questions: Object.values(questions).filter(q => q.answered === true),
    
    

  });
export default connect(mapStateToProps)(Answered);