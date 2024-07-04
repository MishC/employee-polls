// Signin.js
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

function Signin({ userSetUp }) {
  const [error, setError] = useState(null);

  const id = useRef('');
  const password = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (id.current && password.current) {
      userSetUp(id.current.value, password.current.value);
    }
    else setError("Something went wrong. Try Again")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={id}
          placeholder="Enter your ID"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default Signin;
