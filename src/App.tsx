import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { Section, SectionWrapper } from "./components/Section";
import { Countdown } from "./components/Countdown";
import "./index.css";
import { ShareBar } from "./components/ShareBar";

const AppStyles = styled.div.attrs((p) => ({
  ...p,
  id: "app-container",
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
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const hash = document.location.hash.replace("#", "");
    const element = document.getElementById(hash);
    if (hash == null || element == null || wrapperRef == null) {
      return;
    }
    // @ts-ignore
    wrapperRef.current.scrollTo({ top: element.getBoundingClientRect().top });
  }, [wrapperRef.current]);

  return (
    <AppStyles ref={wrapperRef}>
      <Section
        id=""
        nextId="tienpito"
        title="8 Miljardia"
        description={
          <>
            Autoilijat maksavat Suomeen vuosittain <b>kahdeksan miljardia</b>{" "}
            euroa veroina.
          </>
        }
      ></Section>
      <Section
        id="tienpito"
        nextId="nettomaksu"
        title="Tienpitoon miljardi"
        description={
          <>
            Autoliiton mukaan tästä summasta tienpitoon palaa kuitenkin{" "}
            <a
              href="https://www.autoliitto.fi/tietoa-tienkayttajalle/vaalit"
              target="_blank"
            >
              vain miljardi
            </a>
            . Tarkemmin 1.4 miljardia.
          </>
        }
      />
      <Section
        id="nettomaksu"
        nextId="verotuotto"
        showTitleDesc
        title={
          <>
            <Countdown from={8} to={6.6} inMs={800} shortDelay /> Miljardia
          </>
        }
        description={
          <>
            Lähes 7 miljardia nettomaksua. Autoilija näyttää olevan todellinen
            nettomaksaja. Nyt perataan asia juurta jaksain.
          </>
        }
      />
      <Section
        id="verotuotto"
        nextId="alv"
        title="Verotuotto"
        description={
          <>
            Autoalan tiedotuskeskuksen{" "}
            <a
              href="http://www.aut.fi/etusivu_vanha/tilastot/verotus_ja_hintakehitys/valtion_verotulot_tieliikenteesta"
              target="_blank"
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
              title: "Alv, vakuutusverot",
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
        id="alv"
        nextId="alv2"
        title="Alv?"
        description="Laskelmissa on laskettu mukaan arvonlisävero sekä vakuutusverot. Arvonlisäveroa maksetaan muun muassa ruoista, vaatteista sekä asumisesta. Vakuutusveroa maksetaan kaikista vakuutuksista, esimerkiksi kotivakuutuksesta"
      ></Section>
      <Section
        id="alv2"
        nextId="nettomaksu2"
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
        id="nettomaksu2"
        nextId="kuolemat"
        showTitleDesc
        title={
          <>
            <Countdown from={6.6} to={3.3} inMs={1500} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        id="kuolemat"
        nextId="nettomaksu3"
        title="Kuolemat"
        description={
          <>
            Autoliikenteen aiheuttamien kuolemien sekä loukkaantumisien hinta
            yhteiskunnalle on vuodessa{" "}
            <a
              target="_blank"
              href="http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/"
            >
              <b>2 miljardia euroa</b>
            </a>
            .
          </>
        }
      ></Section>
      <Section
        id="nettomaksu3"
        nextId="sairaudet"
        showTitleDesc
        title={
          <>
            <Countdown from={3.3} to={1.3} inMs={800} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        id="sairaudet"
        nextId="nettomaksu4"
        title="Sairaudet"
        description={
          <>
            Vaikka moottoriteknologia on kehittynyt vuosien varrella,
            kaupungeissa autoilu sairastuttaa ihmisiä. Autoliikenne jauhaa
            asfalttia kivipölyksi. Ihmiset sairastuvat katupölyn ohella
            hiukkasiin.
            <br />
            <br />
            Hinta yhteiskunnalle{" "}
            <a
              href="http://liikennejarjestelma.fi/talous-ja-tehokkuus/kustannukset/liikenteen-ulkoiset-kustannukset/"
              target="_blank"
            >
              puoli miljardia vuodessa
            </a>
          </>
        }
      ></Section>
      <Section
        id="nettomaksu4"
        nextId="kunnat"
        showTitleDesc
        title={
          <>
            <Countdown from={1.3} to={0.8} inMs={800} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        id="kunnat"
        nextId="nettomaksu5"
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
        id="nettomaksu5"
        nextId="matkakuluvähennys"
        showTitleDesc
        title={
          <>
            <Countdown from={0.8} to={0.2} inMs={800} shortDelay /> Miljardia
          </>
        }
      />
      <Section
        id="matkakuluvähennys"
        nextId="nettomaksu6"
        title="Matkakuluvähennys"
        description={
          <>
            Matkakuluista vähennetään verotuksessa <b>puoli miljardia</b>{" "}
            vuosittain.
          </>
        }
      ></Section>
      <Section
        id="nettomaksu6"
        nextId="asuminen"
        showTitleDesc
        title={
          <>
            <Countdown from={0.2} to={-0.3} inMs={800} shortDelay /> Miljardia
          </>
        }
        description="Autoilun verot eivät kata siitä aiheutuvia kuluja. Jatketaan kuitenkin vielä."
      />
      <Section
        id="asuminen"
        nextId="kaupungit"
        title="Asumisen hinta"
        description={
          <>
            Parkkinormien vuoksi esimerkiksi Helsingin kantakaupungissa
            autopaikan rakennuskustannukset voivat olla jopa{" "}
            <a
              href="https://www.rakennuslehti.fi/2015/12/yhden-pysakointipaikan-rakennuskustannukset-voivat-olla-jopa-70%E2%80%89000-euroa/"
              target="_blank"
            >
              70 000 euroa paikkaa kohti
            </a>
            . Paikat eivät mene tuolla hinnalla kaupaksi, joten paikoista tullut
            tappio leivotaan asuntojen hintoihin. Asumisen hintaa nostaa myös
            melumittaukset sekä melueristäminen. Melu rajoittaa
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
        id="kaupungit"
        nextId="loppu"
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
        id="loppu"
        title="Kaupunkilainen!"
        description="Vaadi viihtyisämpää kaupunkia. Et ole mitään velkaa autoilijoille."
      >
        <div className="flex">
          <div className="mr-4">
            <a
              className="twitter-share-button"
              href="https://twitter.com/intent/tweet"
              data-size="large"
            >
              Tweet
            </a>
          </div>
          <div
            className="fb-share-button"
            data-href="http://kahdeksan.miljardia.info"
            data-layout="button"
            data-size="large"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fkahdeksan.miljardia.info%2F&amp;src=sdkpreparse"
              className="fb-xfbml-parse-ignore"
            >
              Jaa
            </a>
          </div>
        </div>
      </Section>
      <Section id="loppu" nextId="loppu2">
        <p className="text-gray-500 font-serif text-xs pt-4 text-center pb-4">
          Tämän sivuston on rakentanut yksityishenkilö jota ärsyttää Autoliiton{" "}
          <a
            target="_blank"
            href="https://www.autoliitto.fi/tietoa-tienkayttajalle/vaalit"
          >
            tietoinen valehtelu
          </a>{" "}
          autoilun veroista ja kustannuksista.
          <br />
          <br />
          Voit ottaa sivuston tekijään yhteyden{" "}
          <a target="_blank" href="https://twitter.com/laurinevanpera">
            Twitterissä
          </a>
        </p>
      </Section>
      <Section id="loppu2">
        <p className="text-gray-500 font-serif text-xs pt-4 text-left">
          Tämän sivuston laskelmista on jätetty pois
          <ul className="list-disc pl-3">
            <li>
              Liikkumattomuuden{" "}
              <a
                href="https://www.ukkinstituutti.fi/tutkimus/liikuntatutkimus_suomessa/liikkumattomuuden-kustannukset"
                target="_blank"
              >
                aiheuttamat kustannukset
              </a>{" "}
              yhteiskunnalle (3.2 - 7 miljardia)
            </li>
            <li>
              Henkilöautoilun negatiivinen vaikutus valtion kauppataseeseen
            </li>
            <li>Henkilöautoilun ilmastovaikutukset</li>
          </ul>
        </p>
      </Section>
    </AppStyles>
  );
}

export default App;
