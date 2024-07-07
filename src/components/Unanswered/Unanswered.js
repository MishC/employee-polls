import "./Uanswered.css";
import { useEffect,Fragment } from "react";

import { connect } from "react-redux";
import Table from "../Table/Table";
import { getUnansweredQuestions } from "../../actions/shared";

const Unanswered = ({user,dispatch}) => {
   const {id}=user;
   
useEffect(()=>{
    if (!user){console.log("User is not defined!")}
      dispatch(getUnansweredQuestions(user));
    },[]);
    return (
    <div className="Unanswered">
    <h1>  Unanswered Polls  </h1>

    <Table/>
    </div>
    
)
}
const mapStateToProps = ({user}) => ({
    user,
    id:user.id,
  });

export default connect(mapStateToProps)(Unanswered);