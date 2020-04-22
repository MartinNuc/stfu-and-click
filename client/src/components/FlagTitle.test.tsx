import React from 'react';
import { FlagTitle } from './FlagTitle';
import { render } from 'utils/test-utils';

describe('FlagTitle', () => {
  it('should render title', () => {
    const { getByText } = render(<FlagTitle title={'Hello'} />);
    expect(getByText('Hello')).toBeDefined();
  });
});
