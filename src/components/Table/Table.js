import "./Table.css";
import { connect } from "react-redux";
import Tbody from "./Tbody";

const Table=(props)=>{

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
        <Tbody questions={props.questions}/>
    </table>
    </div>
)
}


export default connect()(Table);