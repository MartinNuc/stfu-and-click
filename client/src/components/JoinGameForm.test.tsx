import React from 'react';
import { render, fireEvent } from 'utils/test-utils'
import { JoinGameForm } from './JoinGameForm';

test(`it should emit team's name when submitted`, async () => {
  const onJoin = jest.fn();
  const { getByPlaceholderText, getByText } = render(<JoinGameForm onJoin={onJoin} />);
  const input = getByPlaceholderText('Your mom');
  const submitButton = getByText('Click!');
  fireEvent.change(input, { target: { value: 'Bubaci' } });
  fireEvent.click(submitButton);
  expect(onJoin).toHaveBeenCalledWith('Bubaci');
});

test(`it should not allow empty team name`, async () => {
  const onJoin = jest.fn();
  const { getByTestId, getByPlaceholderText, getByText } = render(<JoinGameForm onJoin={onJoin} />);
  const input = getByPlaceholderText('Your mom');
  const submitButton = getByText('Click!');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(getByTestId('error')).not.toBeNull();
  expect(onJoin).not.toHaveBeenCalled();
});

test(`it should not display error right away`, async () => {
  const { queryByTestId } = render(<JoinGameForm onJoin={() => {}} />);
  expect(queryByTestId('error')).toBeNull();
});
