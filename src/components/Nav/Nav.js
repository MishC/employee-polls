import "./Nav.css";

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuthedUser } from '../../actions/authedUser'; // Import your action

const Nav = ({ authenticated, clearAuthedUser }) => {
  const handleLogout = () => {
    clearAuthedUser(); // Dispatch action to clear authenticated user
  };

  return (
    <nav className="Nav
    ">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        {authenticated
          ? <li><Link to="/" onClick={handleLogout}>Log Out</Link></li>
          : null
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authenticated: authedUser.authenticated,
});

const mapDispatchToProps = {
  clearAuthedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
