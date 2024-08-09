import "./Table.css";
import { connect } from "react-redux";
import Tbody from "./Tbody";

const Table=({questions,answered})=>{

    return ( 
    <div className="Table">
    <table>
        <thead>
            <tr>
                <th>Created by</th>
                <th>Date</th>
                <th></th>
            </tr>
        </thead>
        <Tbody questions={questions} answered={answered}/>
    </table>
    </div>
)
}


export default connect()(Table);