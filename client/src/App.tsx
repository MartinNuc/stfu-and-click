import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';

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
      <Content>Hello</Content>
      <Footer />
    </Layout>
  );
}

export default App;
