// src/components/MyComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "../../reducers";

import Signin from './Signin'; 
import middleware from '../../middlewares/middleware'; 

// Create a mock store

const mock_store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});


describe('Signin', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Provider store={mock_store}>
        <Signin />
      </Provider>
    );

    // Snapshot testing
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders input password', () => {
    const { getByTestId } = render(
      <Provider store={mock_store}>
        <Signin />
      </Provider>
    );

    expect(getByTestId('psw')).toBeInTheDocument();
  });
  it('renders input id', () => {
    const { getByTestId } = render(
      <Provider store={mock_store}>
        <Signin />
      </Provider>
    );

    expect(getByTestId('id')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = render(
      <Provider store={mock_store}>
        <Signin />
      </Provider>
    );

    expect(getByText(/Submit/i)).toBeInTheDocument();
  });

  // Add more tests to verify different aspects of your component
});
