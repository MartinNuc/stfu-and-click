import React from 'react';
import { render, fireEvent } from 'utils/test-utils';
import { Game } from './Game';
import wnd from 'utils/window';
import { waitForElement, waitForElementToBeRemoved } from '@testing-library/react';

jest.mock('utils/window', () => ({
  location: {
    href: 'https://stfuandclick.com/My%20Awesome%20Team',
  },
  document: {
    execCommand: jest.fn(),
  },
}));

test('it should fill current url into input', () => {
  const { getByTestId } = render(<Game />);
  expect(getByTestId('url').value).toBe(
    'https://stfuandclick.com/My%20Awesome%20Team',
  );
});

test('it should copy url into clipboard after clicking on the input', async () => {
  const { getByTestId, queryByText } = render(<Game />);
  const input = getByTestId('url') as HTMLInputElement;
  expect(input.selectionStart).toBe(0);
  expect(input.selectionEnd).toBe(0);
  fireEvent.click(input);
  expect(input.selectionStart).toBe(0);
  expect(input.selectionEnd).toBe(44);
  expect(wnd.document.execCommand).toHaveBeenCalledWith('copy');

  await waitForElement(() => queryByText('Copied'));
  await waitForElementToBeRemoved(() => queryByText('Copied'));
});
