import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import seoImage from "../pics/landing_img_small.jpg";
import MetaTags from "../components/MetaTags";
import Mainimage from "../components/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import styled from "styled-components";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
    console.log(content);
  };
  const savePost = () => {
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, id }]);
    setTitle("");
    setContent("");
    console.log(allPosts);
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
            <h3>Hamarosan!</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Enter your blog post title"
                className="InputMassage"
                autoComplete="off"
                onChange={savePostTitleToState}
                value={title}
                required
              />
              <textarea
                rows={5}
                name="description"
                placeholder="Enter your blog post content"
                className="TextAreaStyle"
                autoComplete="off"
                onChange={savePostContentToState}
                value={content}
                required
              />
              <Button variant="primary" type="submit" onClick={savePost}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          {!allPosts.length ? (
            <div>
              <h3>There is nothing to see here!</h3>
            </div>
          ) : (
            allPosts.map((eachPost) => {
              return (
                <Col md={4}>
                  <Card className="cardHover" key={eachPost.id}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1NzUwODQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
                      }
                    />
                    <Card.Body className="bodyColor">
                      <Card.Title>
                        <h5>{eachPost.title}</h5>
                      </Card.Title>
                      <Card.Text>
                        <span>{eachPost.content}</span>
                        <br />
                        <Button variant="primary">Read More</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Blog;

// Step One

// const Blog = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [allPosts, setAllPosts] = useState([]);
//   const savePostTitleToState = (event) => {
//     setTitle(event.target.value);
//     console.log(title);
//   };
//   const savePostContentToState = (event) => {
//     setContent(event.target.value);
//     console.log(content);
//   };
//   const savePost = () => {
//     const id = Date.now();
//     setAllPosts([...allPosts, { title, content, id }]);
//     setTitle("");
//     setContent("");
//     console.log(allPosts);
//   };
//   return (
//     <React.Fragment>
//       <MetaTags
//         title="BLOG - Nyolcág"
//         img={seoImage}
//         description="A Nyolcágú Jóga Alapítvány Blogja"
//       />
//       <Mainimage />
//       <Container className="maincontainer">
//         <Row>
//           <Col>
//             <h1>BLOG</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <h3>Hamarosan!</h3>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <div>
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Enter your blog post title"
//                 className="InputMassage"
//                 autoComplete="off"
//                 onChange={savePostTitleToState}
//                 value={title}
//                 required
//               />
//               <textarea
//                 rows={5}
//                 name="description"
//                 placeholder="Enter your blog post content"
//                 className="TextAreaStyle"
//                 autoComplete="off"
//                 onChange={savePostContentToState}
//                 value={content}
//                 required
//               />
//               <Button variant="primary" type="submit" onClick={savePost}>
//                 Submit
//               </Button>
//             </div>
//           </Col>
//         </Row>
//         <br />
//         <Row>
//             {!allPosts.length ? (
//               <div>
//                 <h3>There is nothing to see here!</h3>
//               </div>
//             ) : (
//               allPosts.map((eachPost) => {
//                 return (
//                   <Col md={4}>
//                   <Card className="cardHover" key={eachPost.id}>
//                     <Card.Img
//                       variant="top"
//                       src={
//                         "https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1NzUwODQw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
//                       }
//                     />
//                     <Card.Body className="bodyColor">
//                       <Card.Title>
//                         <h5>{eachPost.title}</h5>
//                       </Card.Title>
//                       <Card.Text>
//                         <span>{eachPost.content}</span>
//                         <br />
//                         <Button variant="primary">Read More</Button>
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                   </Col>
//                 );
//               })
//             )}
//         </Row>
//       </Container>
//     </React.Fragment>
//   );
// };
