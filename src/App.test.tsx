import App from './App';
import { render, screen } from '@testing-library/react';

test('Renders First name', () => {
  render(<App />);
  const getFirstNamefield = screen.getByText(/First Name/i);
  expect(getFirstNamefield).toBeInTheDocument();

});

test('Renders Last name', () => {
  render(<App />);
  const getLastNamefield = screen.getByText(/Last Name/i);
  expect(getLastNamefield).toBeInTheDocument();
});

test('Renders Phone number', () => {
  render(<App />);
  const getPhonefield = screen.getByText(/Phone/i);
  expect(getPhonefield).toBeInTheDocument();
});

test('Renders Email Field', () => {
  render(<App />);
  const getEmailfield = screen.getByText(/Email/i);
  expect(getEmailfield).toBeInTheDocument();
});

