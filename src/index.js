import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {createRoot} from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit';
import { Provider,connect } from "react-redux";
import reducer from "./reducers";
import middleware from './middlewares/middleware'; 
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// Other setup code as needed





