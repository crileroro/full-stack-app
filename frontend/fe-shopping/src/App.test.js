import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Shopping Online/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Go Button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Go/i);
  expect(buttonElement).toBeInTheDocument();
});
