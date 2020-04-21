import React, { useState, MouseEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'atoms/Input';
import wnd from 'utils/window';

export const InvitePals = () => {
  const [copied, setCopied] = useState(false);

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
    <>
      Too lazy to click? Let your pals click for you:
        <CopyNotificationContainer>
          <StyledInput
            onClick={copyToClipboard}
            readOnly
            value={wnd.location.href}
            data-testid="url"
          />
          {copied && <CopiedNotification>Copied</CopiedNotification>}
        </CopyNotificationContainer>
    </>
  )
}

const StyledInput = styled(Input)`
  margin-left: 0.5rem;
`;

const CopyNotificationContainer = styled.div`
  position: relative;
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
