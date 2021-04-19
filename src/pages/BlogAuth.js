import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Mainimage from "../components/Image";
import MetaTags from "../components/MetaTags";
import getFirebase from "../firebase";
import seoImage from "../pics/landing_img_small.jpg";
import Blog from "./Blog";
import "./blog.css";

const BlogAuth = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ loggedIn: false });

  const onAuthStateChange = (callback) => {
    return getFirebase()
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          callback({ loggedIn: true, email: user.email });
        } else {
          callback({ loggedIn: false });
        }
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const login = () => {
    if (username && password) {
      setLoading(true);
      return new Promise((resolve, reject) => {
        getFirebase()
          .auth()
          .signInWithEmailAndPassword(username, password)
          .then(() => {
            resolve();
            setError(null);
            setLoading(false);
          })
          .catch((error) => {
            reject(error);
            setError(error.message);
            setLoading(false);
          });
      });
    }
  };

  return (
    <React.Fragment>
      {!user.loggedIn ? (
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
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="text"
                  name="username"
                  placeholder="Username.."
                  className="InputMassage"
                  autoComplete="off"
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="password"
                  name="password"
                  placeholder="Password.."
                  className="InputMassage"
                  autoComplete="off"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  disabled={loading ? true : false}
                  onClick={login}
                >
                  Login
                </Button>
                <br />
                {error && <span style={{ color: "red" }}>{error}</span>}
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      ) : (
        <Blog
          user={user}
          setUser={setUser}
          onAuthStateChange={onAuthStateChange}
        />
      )}
    </React.Fragment>
  );
};

export default BlogAuth;
