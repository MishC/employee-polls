import "./Nav.css";

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuthedUser } from '../../actions/authedUser';

const Nav = ({user}) => {
  const handleLogout = () => {
    clearAuthedUser(); 
    window.location.reload();
  }

  return (
    <nav className="Nav
    ">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
       <li><Link to="/add">Add Poll</Link></li>
      </ul>
      <ul>
        {user?
        <li><Link to="/" onClick={handleLogout}>Log Out</Link></li>
          : null
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ user }) => ({
user});

const mapDispatchToProps = {
  clearAuthedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
