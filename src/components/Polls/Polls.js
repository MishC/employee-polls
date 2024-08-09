
import Table from "../Table/Table";
import { connect } from "react-redux";
import { Fragment } from "react";

const Polls = ({answered,questions}) => {
   
    return (
        <Fragment>
       {questions&&    
      answered? <Table questions={Object.values(questions).filter(q => q.answered === true)} answered={true}/>
    :<Table questions={Object.values(questions).filter(q => q.answered === false)} answered={false}/>}
      :
        </Fragment>
    )
}
const mapStateToProps = ({ questions}) => ({
    questions
    
  
  });
export default connect(mapStateToProps)(Polls);