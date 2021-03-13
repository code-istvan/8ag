import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./projektjeink.css";
import img1 from "..//pics/Eddie_book.jpg";
import img2 from "..//pics/yo_ve_book.jpg";
import img3 from "..//pics/how_to_know.jpg";
import Link from "../components/StyledComponents/Link";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const Projectjeink = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Projektjeink - Nyolcág"
        img={seoImage}
        description="Projektek amin jelenleg dolgozunk"
      />
      <Mainimage />
      <Container>
        <h1>Projektjeink</h1>
        <Row>
          <Col>
            <p>Jelenleg az alábbi projektjeink vannak előkészítés alatt.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Accordion>
              <Card className="cardHover">
                <Card.Img variant="top" src={img1} />
                <Card.Body className="bodyColor">
                  <Card.Title>
                    <h5>Egy Egyszerű Dolog - könyv</h5>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <PaddingP>
                        Eddie Stern legújabb{" "}
                        <Link
                          href="https://eddiestern.com/one-simple-thing/"
                          target="_blank"
                        >
                          könyve
                        </Link>{" "}
                        pragmatikus és tömör bevezetés a jóga céljaihoz és
                        előnyeihez. Filozófiai, fiziológiai, mentális és
                        spirituális. Részlet a könyvből:{" "}
                        <Link
                          href="https://bandhaworks.hu/eddie-stern-hol-van-az-elmem/"
                          target="_blank"
                        >
                          Hol van az elmém?
                        </Link>{" "}
                        <Link
                          href="https://bandhaworks.hu/eddie-stern-a-joga-csupan-az-addikcio-egy-mas-formaja/"
                          target="_blank"
                        >
                          A jóga csupán az addikció egy más formája?
                        </Link>
                      </PaddingP>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
          </Col>
          <br />
          <Col md={4}>
            <Accordion>
              <Card className="cardHover">
                <Card.Img variant="top" src={img2} />
                <Card.Body className="bodyColor">
                  <Card.Title>Jóga és Vegánság - könyv</Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <PaddingP>
                        A Jóga és a Vegánság könyvében{" "}
                        <Link
                          href="https://jivamuktiyoga.com/about-sharon-david/about-sharon-david/"
                          target="_blank"
                        >
                          Sharon Gannon
                        </Link>
                        , a híres Jivamukti Jóga rendszer megalkotója
                        összefoglalja a jóga, a fizikai egészség, a
                        környezetvédelem és az állatvédelem metszéspontjait.
                      </PaddingP>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
          </Col>
          <br />
          <Col md={4}>
            <Accordion>
              <Card className="cardHover">
                <Card.Img variant="top" src={img3} />
                <Card.Body className="bodyColor">
                  <Card.Title>Isten megismerése - könyv</Card.Title>
                  <br />
                  <Card.Text>
                    <Accordion.Toggle
                      as={Button}
                      variant="primary"
                      eventKey="0"
                    >
                      Bővebben
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <PaddingP>
                        Patandzsali Jóga Aforizmái a jóga és a meditáció
                        gyakorlásának egyik fő munkája. Ezeken az ősi
                        aforizmákon keresztül megtudhatja, hogyan irányíthatja
                        elméjét, és hogyan érheti el a belső békét és
                        szabadságot.
                      </PaddingP>
                    </Accordion.Collapse>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Accordion>
            <br />
          </Col>
        </Row>
      </Container>
      <br />
    </React.Fragment>
  );
};

//Styled Components

const PaddingP = styled.p`
  text-align: justify;
  margin-top: 30px;
`;

export default Projectjeink;
