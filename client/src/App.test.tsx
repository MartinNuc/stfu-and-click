import React from 'react';
import { render } from 'utils/test-utils';
import App from './App';

test('renders header and footer', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();
});

test('renders footer', () => {
  const { getByTestId } = render(<App />);
  const footer = getByTestId('footer');
  expect(footer).toBeInTheDocument();
});
