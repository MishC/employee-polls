
import { connect } from "react-redux";
import { Fragment } from "react";
const Rank = ({ users,user}) => {
console.log(Object.values(users));
    return (<Fragment>
        {Object.values(users).map((item, id) => {
          
          return (
            <tr key={id} className={item[0]===user.name?'your-name':''}>
              <td >{item[0]}</td>
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