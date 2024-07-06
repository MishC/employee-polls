import './App.css';
import { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { BeatLoader, CircleLoader,ClimbingBoxLoader } from 'react-spinners';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import { authenticate, getUserById,getAllUsers } from './actions/shared';

const App = ({ authedUser, user }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginerror,SetLoginerror]=useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);

  /*useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);*/

  useEffect(() => {
   if (userId&&userPassword){
    
       dispatch(getUserById(userId));
   //user?dispatch(authenticate(userId,userPassword,user,true)):console.log("Fail to autheticate!")
  }
}, [userId, userPassword,dispatch]);

  const userSetUp = (id, password) => {
    setUserId(id);
    setUserPassword(password);
   
  };

  const generateLoader = () => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
  
    switch (randomNum) {
      case 1:
        return <BeatLoader size="20px" />;
      case 2:
        return <CircleLoader size="50px" />;
      case 3:
        return <ClimbingBoxLoader size="50px" />;
      default:
        return null;
    }
  };
  return (
    <Fragment>
      {loading ? (<div className="spinner-loader">
        {generateLoader()}</div>
      ) : (
        <Fragment>
          
          <Routes>
            {!authedUser.authenticated ? (
              <Route exact path="/" element={<Signin userSetUp={userSetUp}  />} />
            ) : (
              <Route path="/*" element={<Dashboard />} />
              

            )}
          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, loading, user}) => ({
  authedUser,
  authenticated: authedUser.authenticated,
  user,
  loading,
});

export default connect(mapStateToProps)(App);
