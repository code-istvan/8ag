import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import img from "./pics/firstpostpic.jpg";
import MetaTags from "../components/MetaTags";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import Mainimage from "../components/Image";

const Blog1 = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      {/* <MetaTags
        imageFlag={true}
        title="Indul a blogunk - Nyolcág"
        img={img}
        description="Az alapítvány 2015-ös bejegyzése óta nem igazán volt..."
      /> */}
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nyolcag.hu/indul-a-blogunk" />
        <meta property="og:title" content="Indul a blogunk - Nyolcág" />
        <meta
          property="og:description"
          content="Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk foglalkozni a szervezettel és annak céljaival, annak ellenére, hogy nagyon szerettük volna."
        />
        <meta property="og:image" content={img} />
        <meta
          name="description"
          content="Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk foglalkozni a szervezettel és annak céljaival, annak ellenére, hogy nagyon szerettük volna."
        />
      </Helmet>
      <Mainimage />
      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>Indul a blogunk</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Közzétéve: <strong>July 1 2021</strong>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src={img} rounded fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <PaddingP>
              Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk
              foglalkozni a szervezettel és annak céljaival, annak ellenére,
              hogy nagyon szerettük volna. A Bandha Works Jógaiskola beindítása
              az első pár évben minden energiánkat felemésztette és az évek
              során, ahogy egyre többen és többen gyakoroltak velünk, nem
              csökkent a terhelés. Rengeteget tanultunk ebből az időszakból,
              tőletek, magunkról. A világjárványnak “köszönhetően” az utóbbi egy
              évben felszabadult térben, újraszerveződtünk - új kurátoraink
              Krébesz Andrea és Bimba András Imre - létrehoztuk az alapítvány új
              weblapját. Megteremtődött a megfelelő ökoszisztéma új projektek
              indításához, amiket már megfelelő felületen tudunk megosztani
              veletek. Az új alapok lefektetése nem lett volna lehetséges két
              nagyszerű astangás társunk önzetlen segítsége nélkül, akik a
              megfelelő jogi háttér kialakításában segédkeztek. Hálás köszönet
              ezúton is Dr. Bujtás Viktóriának és Dr. Kővári Zsuzsának. A
              jövőben a blog-on keresztül szeretnénk tartani veletek a
              kapcsolatot, megosztva a projektekkel kapcsolatos történéseket. Ha
              kérdésetek, észrevételetek van tevékenységünkkel kapcsolatban,
              írjatok bátran! Namasté, Nyolcág
            </PaddingP>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={() => history.push("/blog")}>
              Vissza a BLOG menübe
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

//Styled Components
const PaddingP = styled.p`
  text-align: justify;
`;

export default Blog1;
