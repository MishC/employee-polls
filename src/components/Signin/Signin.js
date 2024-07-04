import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import './Signin.css';

function Signin({ userSetUp }) {
  const [error, setError] = useState(null);

  const id = useRef('');
  const password = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (id.current && password.current) {
      userSetUp(id.current.value, password.current.value);
    }
  };

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}  className="Signin">
        <div className="signin-input-container">
          <input
            type="text"
            ref={id}
            className="signin-input"
            placeholder="Enter your ID"
          />
          <input
            type="password"
            ref={password}
            className="signin-input"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="signin-button">Submit</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default connect()(Signin);
