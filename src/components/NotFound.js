import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "./StyledComponents/Link";
import MetaTags from "../components/MetaTags";
import seoImage from "../pics/landing_img_small.jpg";
import Mainimage from "../components/Image";

const NotFound = () => {
    return (
        <React.Fragment>
        <MetaTags
          title="404-es oldal - Nyolcág"
          img={seoImage}
          description="Nem találjuk ezt az oldalt"
        />
        <Mainimage />
<Container className="not-found">
<Row>
    <Col>
    <h2>Bocs...</h2>
    <p>Ezt az oldalt nem találjuk</p>
    <Link href="/">Vissza a főoldalra</Link>
    </Col>
</Row>
</Container>
</React.Fragment>
    ); 
}; 

export default NotFound;