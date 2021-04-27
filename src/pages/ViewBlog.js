import Parser from "html-react-parser";
import React, { useState } from "react";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Mainimage from "../components/Image";
import MetaTags from "../components/MetaTags";
import getFirebase from "../firebase";
// import seoImage from "../pics/landing_img_small.jpg";
import "./blog.css";

const ViewBlog = (props) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);

  const ID = props.location.state;
  let history = useHistory();

  if (loading) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("id")
      .equalTo(parseInt(ID))
      .once("value", (snapshot) => {
        var result = Object.values(snapshot.val());
        setPost(result[0]);
        setLoading(false);
        <MetaTags
          title={result[0].title}
          img={result[0].coverImage}
          description={result[0].overview}
        />;
      });
  }

  return (
    <React.Fragment>
      {/* <MetaTags
        title="BLOG - Nyolcág"
        img={seoImage}
        description="A Nyolcágú Jóga Alapítvány Blogja"
      /> */}
      <Mainimage />
      <Container className="blogwidth" id="mobil">
        {loading ? (
          <div>
            <h3>Betöltés...</h3>
          </div>
        ) : (
          <React.Fragment>
            <Row>
              <Col>
                <h1>{post.title}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>
                  Közzétéve: <strong>{post.datePretty}</strong>
                </h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  rounded
                  fluid
                />
              </Col>
            </Row>
            <Row>
              <Col>{Parser(post.content)}</Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" onClick={() => history.push("/blog")}>
                  Vissza a BLOG menübe
                </Button>
              </Col>
            </Row>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default ViewBlog;
