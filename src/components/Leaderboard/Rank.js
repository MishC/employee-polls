import { connect } from "react-redux";
import { Fragment,useState,useEffect,useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ConfettiWrapper from "../../helper/ConfettiWrapper";
const Rank = ({ users, user }) => {
    const [firstRank, setFirstRank] = useState(false);
    const [rankedUsers, setRankedUsers]= useState([]);


    const calculatedRankedUsers = useMemo(() => {
        return [
          ...Object.values(users).filter(u => u[0] !== user.name),
          [user.name, user.questions.length, Object.keys(user.answers).length]
        ].sort((a, b) => (b[1] + b[2]) - (a[1] + a[2]));
           }, [users, user]);
           

      useEffect(() => {
        if (JSON.stringify(rankedUsers) !== JSON.stringify(calculatedRankedUsers)) {
          setRankedUsers(calculatedRankedUsers);}
          setFirstRank(calculatedRankedUsers[0] && calculatedRankedUsers[0][0] === user.name);
                  }, [calculatedRankedUsers, rankedUsers,user]);
        
    
if (!users || !user) {return <Fragment></Fragment>}
else{
    return (
        <Fragment>
            {(users&&firstRank) && (
            <ConfettiWrapper isVisible={firstRank} />)
        }
            <table>
            <thead>
            <tr>
                <th>Rank</th>
                <th>User</th>
                 <th># Questions</th>
                 <th># Answers</th>
               
                <th>Score</th>
            </tr>
        </thead>
                <tbody>
                    {rankedUsers.map((item, id) => (
                        <tr key={id} className={item[0] === user.name ? 'your-name' : ''}>
                            <td>{id + 1}</td>
                            <td>
                                {item[0] === user.name && <FontAwesomeIcon icon={faStar} />} {item[0]}
                            </td>
                            <td>{item[1]}</td>
                            <td>{item[2]}</td>
                            <td>{item[1] + item[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}
};

const mapStateToProps = ({ users,user }) => ({ users,user });

export default connect(mapStateToProps)(Rank);
