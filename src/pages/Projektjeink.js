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
import { Helmet } from "react-helmet";
import picSmall from "./pics/Eddie_book.jpg";

const Projectjeink = () => {
  return (
    <Container>
      <Helmet>
        <meta property="og:title" content="Projektjeink - Nyolcág" />
        <meta
          property="og:description"
          content="Nyolcágú Jóga Alapítvány Testing"
        />
        <meta property="og:image" content={window.location.origin + picSmall} />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:type" content="object" />
        <meta property="fb:app_id" content="1076431962839514" />
      </Helmet>
      <h1>Projektjeink</h1>
      <Row>
        <Col>
          <p>Jelenleg az alábbi projektjeink vannak előkészítés alatt.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="cardHover">
            <Card.Img variant="top" src={img1} />
            <Card.Body className="bodyColor">
              <Card.Title>Egy Egyszerű Dolog - könyv</Card.Title>
              <Card.Text>
                Eddie Stern legújabb{" "}
                <Link
                  href="https://eddiestern.com/one-simple-thing/"
                  target="_blank"
                >
                  könyve
                </Link>{" "}
                pragmatikus és tömör bevezetés a jóga céljaihoz és előnyeihez.
                Filozófiai, fiziológiai, mentális és spirituális. Részlet a
                könyvből:{" "}
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
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <br />
        <Col md={4}>
          <Card className="cardHover">
            <Card.Img variant="top" src={img2} />
            <Card.Body className="bodyColor">
              <Card.Title>Jóga és Vegánság - könyv</Card.Title>
              <Card.Text>
                A Jóga és a Vegánság könyvében{" "}
                <Link
                  href="https://jivamuktiyoga.com/about-sharon-david/about-sharon-david/"
                  target="_blank"
                >
                  Sharon Gannon
                </Link>
                , a híres Jivamukti Jóga rendszer megalkotója összefoglalja a
                jóga, a fizikai egészség, a környezetvédelem és az állatvédelem
                metszéspontjait.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <br />
        <Col md={4}>
          <Card className="cardHover">
            <Card.Img variant="top" src={img3} />
            <Card.Body className="bodyColor">
              <Card.Title>Isten megismerése - könyv</Card.Title>
              <Card.Text>
                Patandzsali Jóga Aforizmái a jóga és a meditáció gyakorlásának
                egyik fő munkája. Ezeken az ősi aforizmákon keresztül
                megtudhatja, hogyan irányíthatja elméjét, és hogyan érheti el a
                belső békét és szabadságot.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Projectjeink;
