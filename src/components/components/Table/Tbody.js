import "./Table.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserById } from "../../backend/api";
import { getUser } from "../../actions/shared";

const Tbody = ({ questions,answered}) => {

  return (
    <tbody>
      {questions.map((item, id) => {
        const date = new Date(item.timestamp);
        
        return (
          <tr key={id}>
            <td>{item.author}</td>
            <td>{date.toLocaleDateString('no')}</td>
            <td>
            <Link to={`/questions/${item.id}`}>
                <button className="table-button">{answered?`Details`:`Vote`}</button>
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
//const mapStateToProps=({user})=>({user});

export default connect()(Tbody);
