import React from "react";
import { useHistory } from "react-router-dom";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import img from "../blogposts/pics/firstpostpic.jpg";
import { Container, Button, Row, Col, Image, Card } from "react-bootstrap";
import "./blog.css";

const BlogNew = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="BLOG - Nyolcág"
        img={seoImage}
        description="A Nyolcágú Jóga Alapítvány Blogja"
      />
      <Mainimage />
      <BlogOne />
    </React.Fragment>
  );
};

const BlogOne = () => {
  let history = useHistory();
  return (
    <Container className="maincontainer">
      <Row>
        <Col>
          <h1>BLOG</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="cardHover">
            <Card.Img variant="top" src={img} />
            <Card.Body className="bodyColor">
              <Card.Title>
                <h5>Indul a blogunk - Nyolcág</h5>
              </Card.Title>
              <Card.Text>
                <span className="content">
                  Az alapítvány 2015-ös bejegyzése óta nem igazán volt időnk
                  foglalkozni a szervezettel és annak céljaival, annak ellenére,
                  hogy nagyon szerettük volna.
                </span>
              </Card.Text>
              <Card.Text>July 1 2021</Card.Text>
              <Card.Subtitle>
                <Button
                  variant="primary"
                  onClick={() => history.push("/indul-a-blogunk")}
                >
                  Tovább a bejegyzésre
                </Button>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogNew;
