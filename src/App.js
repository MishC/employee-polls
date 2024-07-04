import './App.css';
import { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import Nav from './components/Nav';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import { getAllUsers } from './actions/shared';
import { setAuthedUser } from './actions/authedUser';

const App = ({ authedUser, users }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userId && userPassword) {
        const user = Object.values(users).map(user => Object.values(user)).find(user => user.includes(userPassword) && user.includes(userId));
        if (user) {
            dispatch(setAuthedUser(userId, userPassword, user, true));
        } else {
            console.log("Invalid user or password");
        }
    }
}, [userId, userPassword]);
  const userSetUp = (id, password) => {

    setUserId(id);
    setUserPassword(password);
   
   /* const user=Object.values(users).map(user=>Object.values(user)).find(user=>user.includes(userPassword)&&user.includes(userId));
    user?dispatch(setAuthedUser(userId,userPassword,user,true)):console.log("Invalid user or password");
*/
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
              <Route exact path="/" element={<Signin userSetUp={userSetUp} />} />
            ) : (
              <Route exact path="/" element={<Dashboard user={authedUser.user} />} />
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
