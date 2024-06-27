import './App.css';

import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";


const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
