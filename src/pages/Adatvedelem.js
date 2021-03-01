import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import "./adatvedelem.css";

const Adatvedelem = () => {
  return (
    <Container fluid className="maincontainer">
      <Helmet>
        <title>Adatvédelem - Nyolcág</title>
      </Helmet>
      <Container>
        <h1>Adatvédelmi tájékoztató</h1>
        <Row className="justify-content-md-center">
          <Col className="justify">
            <p>Teszt</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Adatvedelem;
