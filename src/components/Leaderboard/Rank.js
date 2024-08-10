
import { connect } from "react-redux";
import { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'; 
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Rank = ({ users,user}) => {
    const { width, height } = useWindowSize()
   useEffect(()=>{
    <Confetti width={width} height={height}/>
   },[users])
    return (<Fragment>
        {Object.values(users).sort((a, b) => (b[1]+b[2]) - (a[1]+a[2])).map((item, id) => 
        {
            
          if(item[0]===user.name){ return (
            
             <tr key={id} className={'your-name'}> 
             <td>{id+1}</td>
             <td>{<FontAwesomeIcon icon={faStar} /> } {item[0]}</td>
             <td>{user.questions.length}</td>
              <td> {Object.keys(user.answers).length}</td>
              <td>{user.questions.length+Object.keys(user.answers).length}</td>
            </tr>)
          }
          
          else { return( <tr>
            <td>{id+1}</td>
            <td> {item[0]}</td>
             <td>{item[1]}</td>
              <td> {item[2]}</td>
              <td>{item[1]+item[2]}</td>
            </tr>)}
          
        })}
      </Fragment>
    );
  };
  
  const mapStateToProps =({user})=>({user});

  export default connect(mapStateToProps)(Rank);  