import styled from 'styled-components';

export const Spinner = styled.div`
  margin: 20px;
  width: 2rem;
  height: 2rem;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  &:after {
    content: "🤓";
    font-size: 2rem;
    position: relative;
    top: -0.4rem;
  }
`;
