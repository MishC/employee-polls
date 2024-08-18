import './Signin.css';
import React, { useRef } from 'react';
import { connect } from 'react-redux';

function Signin({ userSetUp ,authedUser}) {

  const id = useRef('');
  const password = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
   id.current && password.current?
      userSetUp(id.current.value, password.current.value):
      userSetUp("", "")

  };

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}  className="Signin">
      {(authedUser.error)&&<div className="error-message">Wrong id or password, try again.</div>}

        <div className="signin-input-container">
          <input
          data-testid="id"
            type="text"
            ref={id}
            className="signin-input"
            placeholder="Enter your ID"
          />
          <input
          data-testid="psw"
            type="password"
            ref={password}
            className="signin-input"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="signin-button">Submit</button>      

      </form>
    </div>
  );
}
const mapStateToProps=({authedUser})=>({authedUser});

export default connect(mapStateToProps)(Signin);
