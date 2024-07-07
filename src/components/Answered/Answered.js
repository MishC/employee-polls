
import Table from "../Table/Table";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getAnsweredQuestions } from "../../actions/shared";

const Answered = ({user,questions,dispatch}) => {
    useEffect(()=>{
        if (!user){console.log("User is not defined!")}
        
          dispatch(getAnsweredQuestions(user));
        },[user,dispatch]);
   
    return (
        <div className="Answered">
            {/*<h2>  Answered Polls  </h2>*/}
       {questions.answered&&     <Table questions={Object.values(questions.answered)}/>}

             </div>
    )
}
const mapStateToProps = ({ user,questions}) => ({
    user,
    questions
    

  });
export default connect(mapStateToProps)(Answered);