import { connect } from "react-redux";

const Tbody = ({uquestions}) => {
    return (<tbody>
        {Object.values(uquestions).map((item,id)=>
        <tr>
            <td>{item.author}</td>
            <td>{item.timestamp}</td>
            <td><button>See More</button></td>

        </tr>)}
        
    </tbody>);
}

const mapStateToProps = ({ uquestions}) => ({
    uquestions
  });
export default connect(mapStateToProps)(Tbody);