import { connect } from "react-redux";
import { Fragment,useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ConfettiWrapper = ({ isVisible }) => {
    const [showConfetti, setShowConfetti] = useState(isVisible);
    const { width, height } = useWindowSize();

    useEffect(() => {
        if (isVisible) {
            setShowConfetti(true);
            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000); 

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

  

    return showConfetti ? (
        <Confetti
            width={width}
            height={height}
            tweenDuration={4000} 
        />
    ) : null;
};

const Rank = ({ users, user }) => {
    
    if (!users || !user) return <Fragment></Fragment>;

    const rankedUsers = [
        ...Object.values(users).filter(u => u[0] !== user.name),
        [user.name, user.questions.length, Object.keys(user.answers).length]
    ].sort((a, b) => (b[1] + b[2]) - (a[1] + a[2]));

    const isFirstRank = rankedUsers[0] && rankedUsers[0][0] === user.name;

    return (
        <Fragment>
            {isFirstRank && (
            <ConfettiWrapper isVisible={isFirstRank} />
        )}
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
};

const mapStateToProps = ({ users,user }) => ({ users,user });

export default connect(mapStateToProps)(Rank);
