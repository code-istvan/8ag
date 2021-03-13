import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
// import styled from "styled-components";

const Blog = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="BLOG - Nyolcág"
        img={seoImage}
        description="A Nyolcágú Jóga Alapítvány Blogja"
      />
      <Mainimage />
      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>BLOG</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Hamarosan!</h3>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
