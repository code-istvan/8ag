import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Link from "../components/StyledComponents/Link";
import "./adatvedelem.css";

const Adatvedelem = () => {
  return (
    <Container className="maincontainer">
      <Helmet>
        <title>Adatvédelem - Nyolcág</title>
      </Helmet>
      <Row>
        <Col>
          <h1>Adatvédelmi tájékoztató</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaddingP>
            <h4>Preambulum</h4>
            <p>
              A jelen tájékoztató („<strong>Adatvédelmi Tájékoztató</strong>”)
              célja, hogy rögzítse a <strong>Nyolcágú Jóga Alapítvány</strong>{" "}
              (székhely: 1132 Budapest, Visegrádi u. 80/A 8/2.; nyilvántartási
              szám: 01-09-879437; az „<strong>Alapítvány</strong>”), mint a
              www.nyolcag.hu honlap („Honlap”) tulajdonosa által alkalmazott
              adatvédelmi és adatkezelési elveket, amelyet az Alapítvány mint
              adatkezelő magára nézve kötelező erővel ismer el. Jelen
              Tájékoztató a Honlapon a felhasználók által megadott személyes
              adatok kezelésének elveit tartalmazza, egyben tájékoztatást nyújt
              az érintettek részére személyes adataik kezeléséről. Célja
              továbbá, hogy az Alapítvány részére juttatott pénzbeli támogatások
              adatkezelésével kapcsolatos tájékoztatást az érintettek
              rendelkezésére bocsássa.
            </p>
            <p>
              A Tájékoztató rendelkezései és tartalma az Európai Parlament és a
              Tanács 2016/679 Rendeletében („<strong>GDPR</strong>”)
              foglaltakon, valamint az információs önrendelkezési jogról és az
              információszabadságról szóló 2011. évi CXII. törvény („
              <strong>Infotv.</strong>”) rendelkezésein alapul.
            </p>
            <h4>Az adatkezelő adatai</h4>
            <p>
              Az Ön személyes adatainak kezelése szempontjából az Alapítvány az
              adatkezelő, azaz az Alapítvány felelős az Ön személyes adatainak
              jogszerű kezeléséért.
            </p>
            <p>
              Az alábbi elérhetőségeken veheti fel velünk a kapcsolatot:
              <br />
              <strong>Adatkezelő neve:</strong> Nyolcágú Jóga Alapítvány
              <br />
              <strong>Postacím:</strong> 1132 Budapest, Visegrádi u. 80/A 8/2.
              <br />
              <strong>Nyilvántartási szám:</strong> 01-09-879437
              <br />
              <strong>E-mail cím:</strong> namaste (kukac) nyolcag (pont) hu
              <br />
              <strong>Honlap:</strong>{" "}
              <Link href="https://nyolcag.hu">nyolcag.hu</Link>
              <br />
            </p>
            <h4 className="underline">I. Honlapra vonatkozó adatkezelés</h4>
            <h4>
              1. Az adatkezelés rövid bemutatása az egyes adatkezelési
              folyamatok szintjén
            </h4>
            <ul>
              <li>
                <h5>Cookie-k (Sütik)</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a testre szabott kiszolgálás érdekében a felhasználó
              számítógépén kis adatcsomagot (ún. „cookie”-t) helyez el. A cookie
              célja az adott oldal minél magasabb színvonalú működésének
              biztosítása, személyre szabott szolgáltatások biztosítása, a
              felhasználói élmény növelése. A cookie-t a felhasználó képes
              törölni saját számítógépéről, illetve beállíthatja böngészőjét,
              hogy a cookie-k alkalmazását tiltsa. A cookie-k alkalmazásának
              tiltásával a felhasználó tudomásul veszi, hogy cookie nélkül az
              adott oldal működése nem teljes értékű.
            </p>
            <ul>
              <li>
                <h5>Hírlevél</h5>
              </li>
            </ul>
            <p>
              A hírlevél-szolgáltatás nyújtása érdekében az Alapítvány személyes
              adatot (e-mail címet) vesz fel Öntől. Az e-mail cím rögzítése
              elektronikusan történik oly módon, hogy az erre szolgáló panelt a
              felhasználó kitölti, a megjelenő checkbox kipipálásával elfogadja
              az Adatvédelmi Tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Alapítvány az e-mail címét Hírlevél küldése céljából
              kezelje, majd a küldés gombra kattint.
            </p>
            <ul>
              <li>
                <h5>Kapcsolatfelvétel</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a Honlapon általános kapcsolatfelvétel, illetve
              esetlegesen felmerülő kérdések / kérések megválaszolása céljából
              „Kapcsolat” menüpont alatt üzenetküldési lehetőséget biztosít a
              felhasználók részére, amelynek során az érintett a
              kapcsolatfelvételhez szükséges személyes adatait (nevét, e-mail
              címét) köteles megadni. A név, e-mail cím rögzítése elektronikusan
              történik oly módon, hogy az erre szolgáló panelt a felhasználó
              kitölti, a megjelenő checkbox kipipálásával elfogadja az
              Adatvédelmi Tájékoztatót és egyúttal hozzájárulását adja ahhoz,
              hogy az Alapítvány nevét és e-mail címét kapcsolatfelvétel,
              valamint üzenet küldése céljából kezelje, majd a küldés gombra
              kattint.
            </p>

            <strong></strong>
          </PaddingP>
        </Col>
      </Row>
    </Container>
  );
};

//Styled Components
const PaddingP = styled.p`
  text-align: justify;
`;

export default Adatvedelem;
