import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from './middlewares/middleware'; // Import your custom middleware correctly
import { BrowserRouter as Router } from 'react-router-dom';

// Configure Redux store with reducers and middleware
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

// Render the app inside a root created with `createRoot`
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
