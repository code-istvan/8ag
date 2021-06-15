import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Parser from "html-react-parser";
import Posts from "../blogposts/Posts";
import "./blog.css";

const BlogNew = () => {
  const [allPosts, setAllPosts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    setAllPosts(Posts);
  }, []);

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
          {allPosts.length &&
            allPosts.map((eachPost) => {
              return (
                <Col md={4} key={eachPost.id}>
                  <Card className="cardHover">
                    {/* <Card.Img
                      variant="top"
                      src={eachPost.coverImage}
                    /> */}
                    <Mainimage />
                    <Card.Body className="bodyColor">
                      <Card.Title>
                        <h5>{eachPost.title}</h5>
                      </Card.Title>
                      <Card.Text>
                        <span className="content">
                          {Parser(eachPost.content)}
                        </span>
                      </Card.Text>
                      <Card.Text>{eachPost.date}</Card.Text>
                      <Card.Subtitle>
                        <Button
                          variant="primary"
                          onClick={() =>
                            history.push("/post/" + eachPost.title.replace(/ /g, "-"))
                          }
                        >
                          Tovább a bejegyzésre
                        </Button>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BlogNew;
