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
            <h4>2. Az adatkezelés jogalapja</h4>
            <p>
              A Honlapon keresztül felvett, illetve ott közzétett személyes
              adatok kezelésének jogalapja minden esetben a GDPR 6. cikk (1)
              bekezdés a) pontjában meghatározottak szerint az Ön, mint érintett
              hozzájárulása. A hozzájárulás minden esetben önkéntes. Ön a
              hozzájárulását bármikor visszavonhatja az namaste (kukac) nyolcag
              (pont) hu e-mail címre küldött, ez irányú kérésével.
              <br />
              <br />
              Az Alapítvány felhívja a figyelmet arra, hogy 16 éven aluli
              személyek nem adhatnak meg magukról személyes adatot, kivéve, ha
              szülőktől, törvényes képviselőtől ehhez engedélyt / hozzájárulást
              kértek. Az ennek való megfelelést az érintett köteles biztosítani,
              és az Alapítványt ezzel összefüggésben felelősség nem terheli.
            </p>
            <h4>
              3. Az általunk gyűjtött személyes adatok, a jogalap, a cél és az
              adatmegőrzési idő megjelölésével <br />
            </h4>
            ..................Ide jon a tablazat...................
            <br />
            <h4 className="underline">
              II. Adományozásra vonatkozó adatkezelés
            </h4>
            <h4>1. Az adományozásra vonatkozó egyes adatkezelési esetek</h4>
            <ul>
              <li>
                <h5>Banki átutalás</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány a Honlapon feltüntette bankszámlaszámát annak
              érdekében, hogy a segíteni vágyók egyszeri vagy rendszeres utalás
              útján támogathassák az Alapítvány munkáját.
            </p>
            <ul>
              <li>
                <h5>Postai csekkes befizetés</h5>
              </li>
            </ul>
            <p>
              A segíteni vágyóknak postai csekkes befizetéssel is van
              lehetőségük adományozásra. A csekk igénylése a Honlapon a
              „Kapcsolat” menüpont alatt az üzenetküldési lehetőség
              igénybevételével történhet.{" "}
            </p>
            <ul>
              <li>
                <h5>Adományozók nevének nyilvánosságra hozatala</h5>
              </li>
            </ul>
            <p>
              Amennyiben Ön hozzájárul, nevét és az adományozott összeget vagy
              csak nevét feltüntetjük honlapunkon az adományozók között. Ön a
              hozzájárulását bármikor visszavonhatja az namaste (kukac) nyolcag
              (pont) hu e-mail címre küldött, ez irányú kérésével.
            </p>
            <h4>
              2. Az általunk gyűjtött személyes adatok, a jogalap és a cél és az
              adatmegőrzési idő megjelölésével
            </h4>
            ..................Ide jon a tablazat 2...................
            <h4 className="underline">
              III. Az Ön jogai és jogorvoslati lehetőségei
            </h4>
            <h4>
              1. Milyen jogai vannak Önnek, mint Érintettnek az adataival
              kapcsolatban
            </h4>
            <ul>
              <li>
                <h5>Tájékoztatáshoz és hozzáféréshez való jog</h5>
              </li>
            </ul>
            <p>
              Ön jogosult arra, hogy az Alapítványtól kérésére visszajelzést
              kapjon arra vonatkozóan, hogy személyes adatainak kezelése
              folyamatban van-e. Továbbá, ha ilyen adatkezelés folyamatban van,
              jogosult arra, hogy a személyes adatokhoz és a következő
              információkhoz hozzáférést kapjon:
            </p>
            <ul className="abc">
              <li>
                <p>adatkezelés céljai;</p>
              </li>
              <li>
                <p>érintett személyes adatok kategóriái;</p>
              </li>
              <li>
                <p>
                  azon címzettek, akikkel a személyes adatokat az Alapítvány
                  közli vagy közölni fogja (ide értve különösen az
                  adatfeldolgozókat);
                </p>
              </li>
              <li>
                <p>a személyes adatok tárolásának tervezett időtartama;</p>
              </li>
              <li>
                <p>az Ön jogai a személyes adatok kezelése körében;</p>
              </li>
              <li>
                <p>az adatok forrása, amennyiben nem Öntől gyűjtöttük őket;</p>
              </li>
              <li>
                <p>
                  az automatizált döntéshozatal (automata üzenetküldés) tényéről
                  - az alkalmazott logikára és arra vonatkozó érthető
                  információkról, hogy az ilyen adatkezelés milyen jelentőséggel
                  bír, és az érintettre nézve milyen várható következményekkel
                  jár.
                </p>
              </li>
            </ul>
            <p>
              A vonatkozó jogszabályok alapján az Ön személyes adatokról való
              tájékoztatását ingyenesen biztosítjuk. Kérésére egy hónapon belül
              írásban – e-mail útján - válaszolunk.
            </p>
            <ul>
              <li>
                <h5>Helyesbítéshez való jog</h5>
              </li>
            </ul>
            <p>
              Ha az általunk kezelt személyes adatok nem pontosak, akkor az Ön
              kérésére - indokolatlan késedelem nélkül - kijavítjuk őket. Ön
              jogosult arra is, hogy kérje a hiányos személyes adatai
              kiegészítését, az erre vonatkozó nyilatkozata útján.
            </p>
            <ul>
              <li>
                <h5>Törléshez való jog</h5>
              </li>
            </ul>
            <p>
              Az Alapítvány késedelem nélkül törli az érintett személyes
              adatokat, amennyiben:
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
