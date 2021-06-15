import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Link from "../components/StyledComponents/Link";
import "./blogposts.css";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Post1 = () => {
  const history = useHistory();

  return (
    <React.Fragment>
      <MetaTags
        title="Indul a blogunk"
        img={seoImage}
        description="Indul a nyolcág blog"
      />
      <Mainimage />
      <Container className="blogwidth">
        <Row>
          <Col>
            <h1>Indul a blogunk</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk
            foglalkozni a szervezettel és annak céljaival, annak ellenére, hogy
            nagyon szerettük volna. A Bandha Works Jógaiskola beindítása az első
            pár évben minden energiánkat felemésztette és az évek során, ahogy
            egyre többen és többen gyakoroltak velünk, nem csökkent a terhelés.
            Rengeteget tanultunk ebből az időszakból, tőletek, magunkról. A
            világjárványnak “köszönhetően” az utóbbi egy évben felszabadult
            térben, újraszerveződtünk - új kurátoraink Krébesz Andrea és Bimba
            András Imre - létrehoztuk az alapítvány új weblapját. Megteremtődött
            a megfelelő ökoszisztéma új projektek indításához, amiket már
            megfelelő felületen tudunk megosztani veletek. Az új alapok
            lefektetése nem lett volna lehetséges két nagyszerű astangás társunk
            önzetlen segítsége nélkül, akik a megfelelő jogi háttér
            kialakításában segédkeztek. Hálás köszönet ezúton is Dr. Bujtás
            Viktóriának és Dr. Kővári Zsuzsának. A jövőben a blog-on keresztül
            szeretnénk tartani veletek a kapcsolatot, megosztva a projektekkel
            kapcsolatos történéseket. Ha kérdésetek, észrevételetek van
            tevékenységünkkel kapcsolatban, írjatok bátran! Namasté, Nyolcág
            <p>
              Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk
              foglalkozni a szervezettel és annak céljaival, annak ellenére,
              hogy nagyon szerettük volna. A{" "}
              <a
                href="https://bandhaworks.hu\"
                rel="noopener noreferrer\"
                target="_blank\"
              >
                Bandha Works Jógaiskola
              </a>
              beindítása az első pár évben minden energiánkat felemésztette és
              az évek során, ahogy egyre többen és többen gyakoroltak velünk,
              nem csökkent a terhelés. Rengeteget tanultunk ebből az időszakból,
              tőletek, magunkról.
            </p>
            <p>
              A világjárványnak “köszönhetően” az utóbbi egy évben felszabadult
              térben, újraszerveződtünk - új kurátoraink{" "}
              <strong>Krébesz Andrea</strong> és{" "}
              <strong>Bimba András Imre</strong>- létrehoztuk az alapítvány új
              weblapját. Megteremtődött a megfelelő ökoszisztéma{" "}
              <a
                href="https://nyolcag.hu/projektjeink\"
                rel="noopener noreferrer\"
                target="_blank\"
              >
                új projektek
              </a>{" "}
              indításához, amiket már megfelelő felületen tudunk megosztani
              veletek.
            </p>
            <p>
              Az új alapok lefektetése nem lett volna lehetséges két nagyszerű
              astangás társunk önzetlen segítsége nélkül, akik a megfelelő jogi
              háttér kialakításában s egédkeztek. Hálás köszönet ezúton is{" "}
              <strong>Dr. Bujtás Viktóriának</strong> és{" "}
              <strong>Dr. Kővári Zsuzsának</strong>.
            </p>
            <p>
              A jövőben a blog-on keresztül szeretnénk tartani veletek a
              kapcsolatot, megosztva a projektekkel kapcsolatos történéseket.
            </p>
            <p>
              Ha kérdésetek, észrevételetek van tevékenységünkkel kapcsolatban,
              írjatok bátran!
            </p>
            <p>Namasté,Nyolcág</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => history.push("/blog")}>
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

export default Post1;
