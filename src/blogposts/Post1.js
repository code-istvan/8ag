import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "../components/StyledComponents/Link";
import "./egyszazalek.css";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import styled from "styled-components";

const Post1 = () => {
  return (
    <React.Fragment>
      <MetaTags
        title="Első blogpost"
        img={seoImage}
        description="Első blogpost"
      />
      <Mainimage />
      <Container className="maincontainer">
        <Row>
          <Col>
            <h1>Első blogpost</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <PaddingP>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </PaddingP>
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
