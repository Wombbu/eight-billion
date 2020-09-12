import React from "react";
import styled from "styled-components";
import { Title } from "./components/Title";
import "./index.css";
import { ShareBar } from "./components/ShareBar";

const AppStyles = styled.div``;

function App() {
  return (
    <AppStyles className="w-full m-auto max-w-lg flex flex-col items-center px-4">
      <Title
        primary="8 Miljardia"
        secondary="Autoilijat maksavat Suomeen vuosittain kahdeksan miljardia euroa veroina. Katsotaan mistä summa koostuu."
      ></Title>
      <Title
        primary="Verotuotto"
        secondary={
          <React.Fragment>
            Autoalan tiedotuskeskuksen laskelmien mukaan kahdeksan miljardia
            jakautuu seuraavalla tavalla. <br />
            Paina kenttiä nähdäksesi lisätietoa
          </React.Fragment>
        }
      >
        <ShareBar
          items={[
            {
              value: 3269,
              title: "Alv",
              color: "green",
              description:
                "Arvonlisävero kerätään jokaisesta Suomessa ostetusta tavarasta, muun muassa ruoasta.",
            },
            {
              value: 2635,
              title: "Polttoainevero",
              color: "pink",
              description:
                "Polttoainevero on kiinteä vero polttoaineiden hinnassa.",
            },
            {
              value: 1150,
              title: "Ajoneuvovero",
              color: "blue",
              description: "Ajoneuvovero kerätään vuosittain ajoneuvoista.",
            },
            {
              value: 892,
              title: "Autovero",
              color: "red",
              description: "Autovero kerätään uusista autoista ostohetkellä.",
            },
          ]}
        />
      </Title>
    </AppStyles>
  );
}

export default App;
