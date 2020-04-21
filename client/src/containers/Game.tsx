import React, { useState, MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Quote } from 'components/Quote';
import { Input } from 'atoms/Input';
import { ScoreTable } from 'components/ScoreTable';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { BlueBorderedContainer } from 'atoms/BlueBordredContainer';
import wnd from 'utils/window';

export const Game = () => {
  const [copied, setCopied] = useState(false);
  const scores = useSelector(
    (state: RootState) => state.leaderboard.leaderboard,
  );

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1500);
    }
  }, [copied]);

  function copyToClipboard(element: MouseEvent<HTMLInputElement>) {
    element.currentTarget.select();
    wnd.document.execCommand('copy');
    setCopied(true);
  }

  return (
    <Container>
      <Heading>
        Clicking for team <TeamName>Prokop</TeamName>
      </Heading>
      <InviteContainer>
        Too lazy to click? Let your pals click for you:
        <CopyNotificationContainer style={{position: 'relative'}}>
          <StyledInput
            onClick={copyToClipboard}
            readOnly
            value={wnd.location.href}
            data-testid="url"
          />
          {copied && <CopiedNotification>Copied</CopiedNotification>}
        </CopyNotificationContainer>
      </InviteContainer>

      <BlueBorderedContainer>
        click button Current score
        <ScoreTable scores={scores} />
        <InviteContainer>
          <Quote>Want to be the top? STFU and click!</Quote>
        </InviteContainer>
      </BlueBorderedContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  text-align: center;
  margin: 2rem;
  font-size: 2rem;
  font-weight: normal;
`;

const TeamName = styled.span`
  font-weight: bold;
`;

const InviteContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  align-self: center;
  font-style: italic;
`;

const StyledInput = styled(Input)`
  margin-left: 0.5rem;
`;

const CopyNotificationContainer = styled.div`
  position:relative;
`;

const CopiedNotification = styled.div`
  border-radius: 5px;
  background-color: black;
  color: white;
  position: absolute;
  top: -50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
`;
