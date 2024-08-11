import "./Nav.css";

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuthedUser } from '../../actions/authedUser';

const Nav = ({authedUser}) => {
  const navigate=useNavigate();
  const handleLogout = () => {
    navigate("/"); 
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
        {authedUser.id?
        <li onClick={handleLogout}>Log Out</li>
          :  <li onClick={handleLogout}>Log in</li>
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ authedUser }) => ({
authedUser});

const mapDispatchToProps = {
  clearAuthedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
