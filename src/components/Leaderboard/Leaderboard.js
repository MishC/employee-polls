import { getAllUsers } from "../../actions/shared";
import { useEffect,useState } from "react";
import Rank from "./Rank";
import { useDispatch } from "react-redux";
const Leaderboard = () => {
    const [users,setUsers] =useState();
    const dispatch = useDispatch();
    useEffect(() => {
         
     const users=dispatch(getAllUsers());
     console.log(users);
 
     }, []);

    return (<div className="Leaderboard">
     <table>
        <thead>
            <tr>
                <th>User</th>
                <th># Answers</th>
                <th># Questions</th>
                <th>Score</th>
            </tr>
        </thead>
        {/*users&&<Rank users={Object.values(users)}/>*/}
    </table>

    </div>);
}

export default Leaderboard;