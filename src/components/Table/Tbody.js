import "./Table.css";
import { connect } from "react-redux";

const Tbody = ({ questions }) => {

  return (
    <tbody>
      {questions.map((item, id) => {
        const date = new Date(item.timestamp);
        return (
          <tr key={id}>
            <td>{item.author}</td>
            <td>{date.toLocaleString('no')}</td>
            <td>
              <button>See More</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
