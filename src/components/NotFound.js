import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "./StyledComponents/Link";
import MetaTags from "../components/MetaTags";
import seoImage from "../pics/landing_img_small.jpg";
import Mainimage from "../components/Image";
import Button from "react-bootstrap/Button";
import "./notfound.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="404-es oldal - Nyolcág"
        img={seoImage}
        description="Nem találjuk ezt az oldalt"
      />
      <Mainimage />
      <Container className="not-found maincontainer">
        <Row>
          <Col>
            <h2>404-es oldal...bocs...ezt az oldalt nem találjuk!</h2>
            <p>
              Vagy kitöröltük az oldal tartalmát, aminek a linkjével
              rendelkeztél. Vagy helytelen linket gépeltél be. Sammi gond, jó
              helyen vagy! Menj a főoldalra és kezdd újra!
            </p>
            <Button href="/">Vissza a főoldalra</Button>
            <br />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
