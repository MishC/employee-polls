// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

// Set up a global mock for the browser environment
const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.URL.createObjectURL = jest.fn(); // Mock the function if needed


