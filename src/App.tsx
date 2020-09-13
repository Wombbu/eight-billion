import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Section, SectionWrapper } from "./components/Section";
import { Countdown } from "./components/Countdown";
import "./index.css";
import { ShareBar } from "./components/ShareBar";

const AppStyles = styled.div.attrs((p) => ({
  ...p,
  className: `flex flex-col items-stretch px-4`,
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
    font-weight: bold;
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
        description={
          <>
            Autoilijat maksavat Suomeen vuosittain <b>kahdeksan miljardia</b>{" "}
            euroa veroina.
          </>
        }
      ></Section>
      <Section
        title="Tienpitoon miljardi"
        description={
          <>
            Autoliiton mukaan tästä summasta tienpitoon palaa kuitenkin{" "}
            <a
              href="https://www.autoliitto.fi/tietoa-tienkayttajalle/vaalit"
              target="blank"
            >
              vain miljardi
            </a>
            . Tarkemmin 1.4 miljardia.
          </>
        }
      />
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={8} to={6.6} inMs={800} /> Miljardia
          </>
        }
        description={
          <>
            <b>Lähes 7 miljardia nettomaksua</b>. Autoilija näyttää olevan
            todellinen nettomaksaja. Nyt perataan asia juurta jaksain.
          </>
        }
      />
      <Section
        title="Verotuotto"
        description={
          <>
            Autoalan tiedotuskeskuksen{" "}
            <a
              href="http://www.aut.fi/etusivu_vanha/tilastot/verotus_ja_hintakehitys/valtion_verotulot_tieliikenteesta"
              target="blank"
            >
              laskelmien mukaan
            </a>{" "}
            kahdeksan miljardia jakautuu seuraavalla tavalla. <br /> <br />
            Paina kenttiä nähdäksesi lisätietoa
          </>
        }
      >
        <ShareBar
          items={[
            {
              value: 3269,
              title: "Alv ja vakuutusverot",
              description:
                "Arvonlisävero kerätään jokaisesta Suomessa ostetusta tavarasta, muun muassa ruoasta.",
            },
            {
              value: 2635,
              title: "Polttoainevero",
              description:
                "Polttoainevero on kiinteä vero polttoaineiden hinnassa.",
            },
            {
              value: 1150,
              title: "Ajoneuvovero",
              description: "Ajoneuvovero kerätään vuosittain ajoneuvoista.",
            },
            {
              value: 892,
              title: "Autovero",
              description: "Autovero kerätään uusista autoista ostohetkellä.",
            },
          ]}
        />
      </Section>
      <Section
        title="Alv?"
        description="Laskelmissa on laskettu mukaan arvonlisävero sekä vakuutusverot. Arvonlisäveroa maksetaan muun muassa ruoista, vaatteista sekä asumisesta. Vakuutusveroa maksetaan kaikista vakuutuksista, esimerkiksi kotivakuutuksesta"
      ></Section>
      <Section
        description={
          <>
            Vaatteista maksettua arvonlisäveroa ei palauteta vaatteidenkäytön
            tukemiseen.
            <br /> Tietotekniikasta maksettua arvonlisäveroa ei palauteta
            tietotekniikan käytön tukemiseen.
            <br />
            <br />
            Täten on kohtuutonta vaatia, että kaikista liiketoimintasektoreista
            juuri autoilusta maksettu alv korvamerkittäisiin autoiluun.
            Poistetaan arvonlisävero nettomaksusta.
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={6.6} to={3.3} inMs={1500} shortDelay /> Miljardia
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
              <b>2 miljardia euroa</b>
            </a>
            .
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={3.3} to={1.3} inMs={800} shortDelay /> Miljardia
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
            Hinta yhteiskunnalle{" "}
            <a
              href="http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/"
              target="blank"
            >
              puoli miljardia vuodessa
            </a>
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={1.3} to={0.8} inMs={800} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        title="Kunnat"
        description={
          <>
            Valtio hoitaa vain pääteitä. Kunnat rakentavat omalla rahallaan
            tiestönsä. Kunnat rahoittavat tiestönsä kunnallisverolla. Vuonna
            2017 kunnat käyttivät tienpitoon n. 700 miljoonaa euroa. Tästä
            arviolta 70%, eli <b>puoli miljardia</b> menee autoiluun
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={0.8} to={0.2} inMs={800} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        title="Matkakuluvähennys"
        description={
          <>
            Matkakuluista vähennetään verotuksessa <b>puoli miljardia</b>{" "}
            vuosittain.
          </>
        }
      ></Section>
      <Section
        showTitleDesc
        title={
          <>
            <Countdown from={0.2} to={-0.3} inMs={800} shortDelay /> Miljardia
          </>
        }
        description="Autoilun verot eivät kata siitä aiheutuvia kuluja. Jatketaan kuitenkin vielä."
      />
      <Section
        title="Asumisen hinta"
        description={
          <>
            Parkkinormien vuoksi esimerkiksi Helsingin kantakaupungissa
            autopaikan rakennuskustannukset voivat olla 70 000 euroa paikkaa
            kohti. Paikat eivät mene tuolla hinnalla kaupaksi, joten paikoista
            tullut tappio leivotaan asuntojen hintoihin. Asumisen hintaa nostaa
            myös melumittaukset sekä melueristäminen. Melu rajoittaa
            huoneistosijoittelua kaupunkiasunnoissa. Kaupunkiasunnot ovat
            autoliikenteen melun takia rajoittuneemmin suunniteltuja.
            <br />
            <br />
            Rakennusteollisuus vastustaa parkkinormia. Paikkoja ei rakenneta
            markkinavetoisesti, vaan valtiovetoisesti.
          </>
        }
      ></Section>
      <Section
        description={
          <>
            Autoilun haitat keskittyvät kaupunkeihin. Etenkin kaupungeissa
            autoilun vaatima tila, sen aiheuttama melu sekä turvattomuus
            korostuvat. Tälle on vaikea asettaa hintaa, mutta:
            <br />
            <br />
            <b>
              Jokainen tietää miten viihtyisää 50-luvulla ja sitä ennen
              rakennettu kaupunkiympäristö on. Ja miten epäviihtyisää 70 luvulla
              ja myöhemmin autoilun ehdoilla rakennettu kaupunkiympäristö on.
            </b>
          </>
        }
      />
      <Section
        hideScrollHint
        title="Kaupunkilainen!"
        description="Vaadi viihtyisämpää kaupunkia. Et ole mitään velkaa autoilijoille."
      />
    </AppStyles>
  );
}

export default App;
