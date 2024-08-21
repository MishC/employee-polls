jest.mock('plotly.js-dist', () => require.requireActual('./__mocks__/plotly.js'));
// setupTests.js or jest.setup.js

// Store the original console.error
const originalError = console.error;

// Override console.error to suppress specific warnings
console.error = (...args) => {
  if (/ReactDOMTestUtils\.act is deprecated/.test(args[0])) {
    return; // Suppress this specific warning
  }
  originalError(...args);
};

// Restore the original console.error after all tests
afterAll(() => {
  console.error = originalError;
});
