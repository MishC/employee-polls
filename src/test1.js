import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from './store';
import App from './App';
jest.mock('plotly.js-dist', () => require('./__mocks__/plotly.js'));

test('renders learn react link', () => {
    jest.mock('plotly.js');
    jest.mock('plotly.js-dist', () => require('./__mocks__/plotly.js'));

  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
});
