import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
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
