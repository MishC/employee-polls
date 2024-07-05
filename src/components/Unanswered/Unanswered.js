import Table from "../Table/Table";
import { connect } from "react-redux";

const Unanswered = (unanswered) => {
    return <Table/>;
}

export default connect()(Unanswered);