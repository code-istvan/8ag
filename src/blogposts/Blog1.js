import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styled from "styled-components";
// import Link from "../components/StyledComponents/Link";
// import seoImage from "../pics/landing_img_small.jpg";
// import BlogPostPic1 from "https://bandhaworks.hu/Files/firstpostpic.jpg";
import MetaTags from "../components/MetaTags";
// import "./adatvedelem.css";
import Mainimage from "../components/Image";

const Blog1 = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Indul a blogunk - Nyolcág"
        img="https://bandhaworks.hu/Files/firstpostpic.jpg"
        description="Indul a blogunk - Nyolcág"
      />
      <Mainimage />
      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>Indul a blogunk</h1>
          </Col>
        </Row>
        <Row>
          <img src="https://bandhaworks.hu/Files/firstpostpic.jpg" />
        </Row>

        <Row>
          <p>
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
          </p>
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
