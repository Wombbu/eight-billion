import React from 'react';
import styled from 'styled-components';
import {Title} from './components/Title';
import "./index.css";
import tw from "tailwind.macro";

const AppStyles = styled.div`
`;

function App() {
  return (
    <AppStyles className="w-full m-auto max-w-md flex flex-col items-center">
      <Title primary="8 Miljardia" secondary="Autoilijat maksavat Suomeen vuosittain kahdeksan miljardia euroa veroina. Katsotaan mistä summa koostuu." />
      <Title primary="Verotuotto" secondary="Autoilusta kerätään veroja. Autoliiton laskelmien mukaan verotuotto jakautuu seuraavalla tavalla" />
    </AppStyles>
  );
}

export default App;
