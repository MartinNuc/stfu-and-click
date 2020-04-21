import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { JoinGame } from 'containers/JoinGame';
import { Game } from 'containers/Game';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const Content = styled.div`
  max-width: 500px;
  margin: 0 2rem;
`;

function App() {
  return (
    <Layout>
      <Header data-testid="header" />
      <Content>
        <Switch>
          <Route path="/">
            <JoinGame />
          </Route>
          <Route path="/:team">
            <Game />
          </Route>
        </Switch>
      </Content>
      <Footer data-testid="footer" />
    </Layout>
  );
}

export default App;
