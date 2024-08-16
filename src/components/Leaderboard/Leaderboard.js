import "./Leaderboard.css";
import { getAllUsers } from "../../actions/shared";
import { useEffect } from "react";
import Rank from "./Rank";
import { useDispatch, connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy} from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';


const Leaderboard = ({users,user}) => {
    const dispatch = useDispatch();
    useEffect(() => {
         
    dispatch(getAllUsers());
     }, [dispatch]);
     const navigate = useNavigate();

     const handleNavigate = () => {
       navigate('/');
     };
   
    return (<div className="Leaderboard">
        <div className="leaderboard-title">
        <h1>Leaderboard <FontAwesomeIcon  icon={faTrophy} size="2x" /></h1></div>

        {users&&user&&<Rank/>}

          <button className="back-button" onClick={handleNavigate}>Home</button>

    </div>);
}
const mapStateToProps =({users,user})=>({users,user});

export default connect(mapStateToProps)(Leaderboard);