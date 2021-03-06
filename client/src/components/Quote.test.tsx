import React from 'react';
import { render, getNodeText } from 'utils/test-utils';

import { Quote } from './Quote';

describe('Quote', () => {
  it('should render quote without author', () => {
    const { getByTestId, queryByTestId } = render(
      <Quote>This is a text</Quote>,
    );
    const textEl = getByTestId('text');

    expect(getNodeText(textEl)).toBe('This is a text');
    expect(queryByTestId('author')).toBeNull();
  });

  it('should render quote with author', () => {
    const { getByTestId } = render(
      <Quote author="Martin">This is a text</Quote>,
    );
    const textEl = getByTestId('text');
    const authorEl = getByTestId('author');

    expect(getNodeText(textEl)).toBe('This is a text');
    expect(getNodeText(authorEl)).toBe('- Martin');
  });
});
