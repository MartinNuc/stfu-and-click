import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import JoinGame from 'containers/JoinGame';
import Game from 'containers/Game';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const Content = styled.div`
  max-width: 500px;
  margin: 2rem;
`;

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Router>
          <Route path="/">
            <JoinGame />
          </Route>
          <Route path="/:team">
            <Game />
          </Route>
        </Router>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
