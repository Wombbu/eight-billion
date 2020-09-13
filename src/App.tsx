import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Section, SectionWrapper } from "./components/Section";
import { Countdown } from "./components/Countdown";
import "./index.css";
import { ShareBar } from "./components/ShareBar";

const AppStyles = styled.div.attrs((p) => ({
  ...p,
  className: `w-full m-auto max-w-xl flex flex-col items-center px-4`,
}))`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > ${SectionWrapper} {
    scroll-snap-align: start;
  }

  & a {
    ${tw`text-indigo-500`}
    white-space: nowrap;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <AppStyles>
      <Section
        title="8 Miljardia"
        description="Autoilijat maksavat Suomeen vuosittain kahdeksan miljardia euroa veroina."
      ></Section>
      <Section
        title="Tienpitoon miljardi"
        description="Autoliiton mukaan tästä summasta tienpitoon palaa kuitenkin vain miljardi."
      />
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={8} to={7} inMs={800} /> Miljardia
          </>
        }
        description="7 miljardia nettomaksua. Autoilija näyttää olevan todellinen nettomaksaja. Nyt perataan asia juurta jaksain."
      />
      <Section
        title="Verotuotto"
        description={
          <>
            Autoalan tiedotuskeskuksen laskelmien mukaan kahdeksan miljardia
            jakautuu seuraavalla tavalla. <br />
            Paina kenttiä nähdäksesi lisätietoa
          </>
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
      </Section>
      <Section
        title="Alv?"
        description="Laskelmissa on laskettu mukaan arvonlisävero. Arvonlisäveroa maksetaan muun muassa ruoista, vaatteista sekä asumisesta"
      ></Section>
      <Section
        description={
          <>
            Esimerkiksi vaatteista maksettua arvonlisäveroa (4 miljardia) ei
            palauteta vaatteidenkäytön tukemiseen.
            <br />
            <br />
            Poistetaan arvonlisävero nettomaksusta.
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={7} to={3.7} inMs={1500} /> Miljardia
          </>
        }
      />
      <Section
        title="Autoliitto"
        description="Autoliiton mukaan valtio laittaa vuosittain vain miljardin tiestöön. Todellinen luku on kaksi miljardia."
      />
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={3.7} to={2.7} inMs={800} /> Miljardia
          </>
        }
      />
      <Section
        title="Kuolemat"
        description={
          <>
            Autoliikenteen aiheuttamien kuolemien sekä loukkaantumisien hinta
            yhteiskunnalle on vuodessa{" "}
            <a
              target="blank"
              href="http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/"
            >
              2 miljardia euroa
            </a>
            .
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={2.7} to={0.7} inMs={800} /> Miljardia
          </>
        }
      />
      <Section
        title="Kunnat"
        description={
          <>
            Valtio hoitaa vain pääteitä. Kunnat rakentavat omalla rahallaan
            tiestönsä. Kunnat rahoittavat tiestönsä kunnallisverolla. Vuonna
            2017 kunnat käyttivät tienpitoon n. 700 miljoonaa euroa. Tästä n.
            70%, eli puoli miljardia menee autoiluun
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={0.7} to={0.2} inMs={800} /> Miljardia
          </>
        }
      />
      <Section
        title="Matkakuluvähennys"
        description={
          <>
            Matkakuluista vähennetään verotuksessa puoli miljardia vuosittain.
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={0.2} to={-0.3} inMs={800} /> Miljardia
          </>
        }
        description="Nettosaajaksi mentiin. Autoliitto valehtelee räikeästi"
      />
      <Section
        title="Asumisen hinta"
        description={
          <>
            Parkkinormien vuoksi esimerkiksi Helsingin kantakaupungissa
            autopaikan rakennuskustannukset voivat olla 70 000 euroa paikkaa
            kohti. Paikat eivät mene tuolla hinnalla kaupaksi, joten paikoista
            tullut tappio leivotaan asuntojen hintoihin
          </>
        }
      ></Section>
      <Section
        title="Rakennuttajat"
        description={
          <>
            Rakennusyritykset vastustavat parkkinormia. Se kasvattaa asumisen
            hintaa. Paikkoja ei rakenneta markkinavetoisesti, vaan
            valtiovetoisesti.
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={-0.3} to={-0.4} inMs={100} /> Miljardia
          </>
        }
      />
      <Section
        title="Sairaudet"
        description={
          <>
            Vaikka moottoriteknologia on kehittnyt vuosien varrella,
            kaupungeissa autoilu sairastuttaa ihmisiä. Autoliikenne jauhaa
            asfalttia kivipölyksi. Ihmiset sairastuvat katupölyn ohella
            hiukkasiin.
            <br />
            <br />
            Hinta yhteiskunnalle puoli miljardia vuodessa
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={-0.4} to={-0.9} inMs={800} /> Miljardia
          </>
        }
      />
    </AppStyles>
  );
}

export default App;
