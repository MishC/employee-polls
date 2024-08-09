import './App.css';
import { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { BeatLoader, CircleLoader} from 'react-spinners';
import Nav from './components/Nav/Nav';
import Signin from './components/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';
import { authenticate } from './actions/shared';
import QuestionDetail from './components/QuestionDetail.js/QuestionDetail';
import Leaderboard from './components/Leaderboard/Leaderboard';
import AddQuestion from './components/AddQuestion/AddQuestion';
const App = ({ authedUser, user }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  //const [loginerror,SetLoginerror]=useState('');

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);



  useEffect(() => {
   if (userId&&userPassword){
    
       dispatch(authenticate(userId,userPassword));

      

  }
}, [userId, userPassword]);



  const userSetUp = (id, password) => {
    setUserId(id);
    setUserPassword(password);
   
  };

  const generateLoader = () => {
    const randomNum = Math.floor(Math.random() * 2) + 1;
  
    switch (randomNum) {
      case 1:
        return <BeatLoader size="20px" />;
      case 2:
        return <CircleLoader size="50px" />;
     
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
         <Nav/> 
          <Routes>
            {!authedUser.id ? (
              <Route exact path="/" element={<Signin userSetUp={userSetUp}  />} />
            ) : (
              <Route path="/*" element={<Dashboard />} />
              

            )}
                    <Route path="questions/:question_id" element={<QuestionDetail />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/add" element={<AddQuestion />} />



          </Routes>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser, user,loading,}) => ({
  authedUser,
  user,
  loading,
});

export default connect(mapStateToProps)(App);