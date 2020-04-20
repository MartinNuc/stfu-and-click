import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import { JoinGameForm } from './JoinGameForm';

test(`it should emit team's name when submitted`, async () => {
  const onJoin = jest.fn();
  const { getByTestId } = render(<JoinGameForm onJoin={onJoin} />);
  const input = getByTestId('team');
  const submitButton = getByTestId('submit');
  fireEvent.change(input, { target: { value: 'Bubaci' } });
  fireEvent.click(submitButton);
  expect(onJoin).toHaveBeenCalledWith('Bubaci');
});

test(`it should not allow empty team name`, async () => {
  const onJoin = jest.fn();
  const { getByTestId } = render(<JoinGameForm onJoin={onJoin} />);
  const input = getByTestId('team');
  const submitButton = getByTestId('submit');
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(submitButton);
  expect(getByTestId('error')).not.toBeNull();
  expect(onJoin).not.toHaveBeenCalled();
});

test(`it should not display error right away`, async () => {
  const { queryByTestId } = render(<JoinGameForm onJoin={() => {}} />);
  expect(queryByTestId('error')).toBeNull();
});
