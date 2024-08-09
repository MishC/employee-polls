
const Rank = ({ users}) => {

    return (
      <tbody>
        {users.map((item, id) => {
          
          return (
            <tr key={id}>
              <td>{item.author}</td>
              <td>{item.questions.length}</td>
              <td> {item.answers.length}</td>
              <td>{item.questions.length}+{item.answers.length}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default Rank;
  