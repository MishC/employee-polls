import './App.css';
import { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard';
import { authenticate, getAllUsers } from './actions/shared';

const App = ({ authedUser, users }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginerror,SetLoginerror]=useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
   if (userId&&userPassword){
   
   dispatch(authenticate(userId,userPassword,users,true))}
}, [userId, userPassword,dispatch]);

  const userSetUp = (id, password) => {
    setUserId(id);
    setUserPassword(password);
   
  };

  return (
    <Fragment>
      {loading ? (
        <div className="spinner-loader">
          <BeatLoader size="20px" />
        </div>
      ) : (
        <Fragment>
          
          <Routes>
            {!authedUser.authenticated ? (
              <Route exact path="/" element={<Signin userSetUp={userSetUp}  />} />
            ) : (
              <Route exact path="/" element={<Dashboard />} />
            )}
          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, loading, users}) => ({
  authedUser,
  authenticated: authedUser.authenticated,
  user:authedUser.user,
  loading,
  users,
});

export default connect(mapStateToProps)(App);
