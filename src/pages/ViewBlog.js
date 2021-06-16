import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Mainimage from "../components/Image";
import MetaTags from "../components/MetaTags";
import Posts from "../blogposts/Posts";
import "./blog.css";
import seoImage from "../pics/landing_img_small.jpg";
import Parser from "html-react-parser";
import styled from "styled-components";

const ViewBlog = (props) => {
  // const [loading, setLoading] = useState(true);
  const [filteredPost, setFilteredPost] = useState(null);
  let history = useHistory();
  const postTitle = props.match.params.title.toLowerCase().trim();

  useEffect(() => {
    setFilteredPost(
      Posts.filter(
        (y) => y.title.toLowerCase().trim().replace(/ /g, "-") == postTitle
      )[0]
    );
  }, []);

  return (
    <React.Fragment>
      <Mainimage />
      {filteredPost && (
        <React.Fragment>
          <MetaTags
            title={filteredPost.title}
            img={filteredPost.image}
            description={Parser(filteredPost.content)}
          />
          <Container className="blogwidth" id="mobil">
            <Row>
              <Col>
                <h1>{filteredPost.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Közzétéve: <strong>{filteredPost.date}</strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={filteredPost.image} rounded fluid />
              </Col>
            </Row>
            <Row>
              <Col>
                <PaddingP>{Parser(filteredPost.content)}</PaddingP>
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
      )}
    </React.Fragment>
  );
};

//Styled Components
const PaddingP = styled.p`
  text-align: justify;
`;

export default ViewBlog;
