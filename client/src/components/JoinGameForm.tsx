import React, { FC, useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Button } from 'atoms/Button';
import { Error } from 'atoms/Error';
import { Input } from 'atoms/Input';
import { Label } from 'atoms/Label';

type Props = {
  onJoin: (team: string) => void;
};

export const JoinGameForm: FC<Props> = ({ onJoin }) => {
  const [team, setTeam] = useState('');
  const [error, setError] = useState<null | string>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!team) {
      setError('Come up with a cool team name first');
      return;
    }
    onJoin(team);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="team">Enter your team name:</Label>
        <Input
          type="text"
          id="team"
          placeholder="Your mom"
          onChange={(event) => setTeam(event.target.value)}
        ></Input>
        {error && <Error data-testid="error">{error}</Error>}
      </FormGroup>
      <Button>Click!</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
  @media (min-width: ${({theme}) => theme.breakpoints.phone}) {
    flex-direction: row;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0.5rem;
`;
