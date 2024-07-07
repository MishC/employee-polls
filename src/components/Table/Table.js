import "./Table.css";
import { connect } from "react-redux";
import Tbody from "./Tbody";

const Table=({})=>{

    return ( 
    <div className="Table">
    <table>
        <thead>
            <tr>
                <th>Created by</th>
                <th>Date</th>
                <th>See details</th>
            </tr>
        </thead>
        <Tbody/>
    </table>
    </div>
)
}

const mapStateToProps = ({ uquestions}) => ({
    uquestions
  });
export default connect(mapStateToProps)(Table);