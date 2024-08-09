
import { connect } from "react-redux";
import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons'; 
const Rank = ({ users,user}) => {
console.log(Object.values(users));
    return (<Fragment>
        {Object.values(users).sort((a, b) => (b[1]+b[2]) - (a[1]+a[2])).map((item, id) => {
          
          return (
            <tr key={id} className={item[0]===user.name?'your-name':''}>

            <td>{id+1}</td>
          <td >{item[0]===user.name&&<FontAwesomeIcon icon={faStar} /> } {item[0]}</td>
              <td>{item[1]}</td>
              <td> {item[2]}</td>
              <td>{item[1]+item[2]}</td>
            </tr>
          );
        })}
      </Fragment>
    );
  };
  
  const mapStateToProps =({user})=>({user});

  export default connect(mapStateToProps)(Rank);  