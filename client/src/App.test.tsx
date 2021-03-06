import React from 'react';
import { render } from 'utils/test-utils';
import App from './App';

describe('App', () => {
  it('renders header', () => {
    const { getByText } = render(<App />);
    const header = getByText('STFUANDCLICK.COM', { selector: 'a' });
    expect(header).toBeInTheDocument();
  });

  it('renders footer', () => {
    const { getByText } = render(<App />);
    const footer = getByText((content) =>
      content.startsWith(`If you don't like this page`),
    );
    expect(footer).toBeInTheDocument();
  });
});
