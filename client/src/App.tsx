import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { JoinGame } from 'containers/JoinGame';
import { Game } from 'containers/Game';

function App() {
  return (
    <Layout>
      <Header data-testid="header" />
      <Content>
        <Route exact path="/">
          <JoinGame />
        </Route>
        <Route path="/:team">
          <Game />
        </Route>
      </Content>
      <Footer data-testid="footer" />
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const Content = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 2rem;
`;

export default App;
