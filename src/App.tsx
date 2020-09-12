import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
`;

const Title = styled.h1`
  padding-top: 32px;
  padding-bottom: 32px;
  
`;

function App() {
  return (
    <Body>
      <Title> 8 miljardia </Title>
    </Body>
  );
}

export default App;
