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
import getFirebase from "../firebase";
import Parser from "html-react-parser";
import "./blog.css";
import CreateBlog from "../components/CreateBlog";

const Blog = (props) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [overview, setOverview] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [fileName, setFileName] = useState("");
  const [url, setURL] = useState("");
  const [validate, setValidate] = useState(true);

  let history = useHistory();

  let {user, setUser, onAuthStateChange} = props;

  if (loading && !allPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("time")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((snap) => {
          posts.push(snap.val());
        });
        const newestFirst = posts.reverse();
        setAllPosts(newestFirst);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (!loading) {
      getFirebase().database().ref("/posts").set(allPosts);
    }
  }, [allPosts]);

  const savePost = () => {
    if (title && content) {
      const id = Date.now();
      setAllPosts([
        {
          title,
          content,
          id,
          coverImage: url
            ? url
            : "https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1NzUwODQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
          dateFormatted: new Date().toLocaleString("en-US"),
          datePretty: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          overview: overview,
          time: getFirebase().database.ServerValue.TIMESTAMP,
        },
        ...allPosts,
      ]);
      setValidate(true);
      setTitle("");
      setContent("");
      setFileName("");
      setURL("");
    } else {
      setValidate(false);
    }
  };

  const editorChangeHandler = (content, delta, source, editor) => {
    setContent(editor.getHTML());
    setOverview(editor.getText());
  };

  const handleDrop = async (acceptedFiles) => {
    setFileName(acceptedFiles[0].name);
    const base64 = await convertBase64(acceptedFiles[0]);
    setURL(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleDeleteFile = () => {
    setFileName("");
    setURL("");
  };

  const logout = () => {
    getFirebase().auth().signOut();
    onAuthStateChange(setUser);
    window.location.reload();    
  };

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
            <h3>A BLOG jelenleg fejlesztés alatt áll</h3>
          </Col>
        </Row>
        {user && (
          <React.Fragment>
            <Row>
              <Col xs="4">
                <h6>Welcome {user && user.email}!</h6>
              </Col>
              <Col>
                <Button variant="primary" type="submit" onClick={logout}>
                  Logout
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <CreateBlog
                  editorChangeHandler={editorChangeHandler}
                  savePost={savePost}
                  title={title}
                  content={content}
                  setTitle={setTitle}
                  handleDrop={handleDrop}
                  fileName={fileName}
                  handleDeleteFile={handleDeleteFile}
                  validate={validate}
                />
              </Col>
            </Row>
            <hr />
          </React.Fragment>
        )}
        <br />
        <Row>
          {loading ? (
            <div>
              <h3>Betöltés...</h3>
            </div>
          ) : allPosts.length ? (
            allPosts.map((eachPost) => {
              return (
                <Col md={4} key={eachPost.id}>
                  <Card className="cardHover">
                    <Card.Img
                      variant="top"
                      src={eachPost.coverImage}
                      alt={eachPost.coverImageAlt}
                    />
                    <Card.Body className="bodyColor">
                      <Card.Title>
                        <h5>{eachPost.title}</h5>
                      </Card.Title>
                      <Card.Text>
                        <span className="content">
                          {Parser(eachPost.overview)}
                        </span>
                      </Card.Text>
                      <Card.Text>{eachPost.datePretty}</Card.Text>
                      <Card.Subtitle>
                        <Button
                          variant="primary"
                          onClick={() => history.push("/post/" + eachPost.id)}
                        >
                          Read More
                        </Button>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <div>
              <h3>There is nothing to see here!</h3>
            </div>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
