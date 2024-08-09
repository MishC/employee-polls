import "./Leaderboard.css";
import { getAllUsers } from "../../actions/shared";
import { useEffect,useState } from "react";
import Rank from "./Rank";
import { useDispatch, connect } from "react-redux";
const Leaderboard = ({users}) => {
    const dispatch = useDispatch();
    useEffect(() => {
         
     const users=dispatch(getAllUsers());
     console.log(users);
     }, []);

    return (<div className="Leaderboard">
        <div className="leaderboard-title">
        <h2>Leaderboard</h2></div>
     <table>
        <thead>
            <tr>
                <th>User</th>
                <th># Answers</th>
                <th># Questions</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>

        {users&&<Rank users={users}/>}
        </tbody>

    </table>

    </div>);
}
const mapStateToProps =({users})=>({users});

export default connect(mapStateToProps)(Leaderboard);