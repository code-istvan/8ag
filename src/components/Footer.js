import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./footer.css";
import styled from "styled-components";
import emailjs from "emailjs-com";
import telegram from "..//pics/telegram.svg";
import messenger from "..//pics/messenger.svg";
import instagram from "..//pics/instagram.svg";
import facebook from "..//pics/facebook.svg";
import facebook_blue from "..//pics/facebook_blue.svg";
import instagram_blue from "..//pics/instagram_blue.svg";
import messenger_blue from "..//pics/messenger_blue.svg";
import telegram_blue from "..//pics/telegram_blue.svg";
import ReactDOM from "react-dom";
import Link from '../components/StyledComponents/Link';


const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_FOOTER_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_FOOTER_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          e.target.value = "";
          inputClick(e);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const inputClick = (e) => {
    e.target.value
      ? ReactDOM.render(
          <React.Fragment>
            <input type="submit" value="KÜLDÉS" id="buttonstyle"></input>
            <br />
            <label>
              <input type="checkbox" required /> Elfogadom az Adatvédelmi
              nyilatkozatot
            </label>
          </React.Fragment>,
          document.getElementById("lol")
        )
      : ReactDOM.render("", document.getElementById("lol"));
  };

  const HoverEventsHandler = (e) => {
    if (e.target.alt === "facebook") {
      e.target.src = e.type === "mouseenter" ? facebook_blue : facebook;
    } else if (e.target.alt === "instagram") {
      e.target.src = e.type === "mouseenter" ? instagram_blue : instagram;
    } else if (e.target.alt === "messenger") {
      e.target.src = e.type === "mouseenter" ? messenger_blue : messenger;
    } else if (e.target.alt === "telegram") {
      e.target.src = e.type === "mouseenter" ? telegram_blue : telegram;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="backgroundColorTop">
          <H5Tag>
            “A test nehézkes, az elme vibráló, a lélek sugárzó. A jóga
            gyakorlása kibontakoztatja a testben rejlő lehetőséget és a vibráló
            elme szintjére emelik, hogy mindkettő - a vibrálóvá vált test és
            elme - a lélek fénye felé fordulhasson.”
          </H5Tag>
          <br />
        </Col>
      </Row>
      <Row className="backgroundColor">
        {/* <Row xs={1} md={2} lg={3} className='backgroundColor'> */}
        <Col sm>
          <H6Tag>LEGYÉL A BARÁTUNK</H6Tag>
          <Icons
            url="https://www.facebook.com/nyolcag"
            src={facebook}
            alt="facebook"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="https://www.instagram.com/bandhaworks/"
            src={instagram}
            alt="instagram"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="http://m.me/nyolcag"
            src={messenger}
            alt="messenger"
            eventHandler={HoverEventsHandler}
          />
          <Icons
            url="https://t.me/@istvan108"
            src={telegram}
            alt="telegram"
            eventHandler={HoverEventsHandler}
          />
        </Col>
        <Col sm>
          <H6Tag>HÍRLEVÉL</H6Tag>
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="email"
              name="user_email"
              id="emailstyle"
              placeholder="E-mail címed"
              autoComplete="off"
              onChange={(e) => inputClick(e)}
              required
            ></input>
            <div id="lol"></div>
            <div id="lol2"></div>
          </form>
        </Col>
        <Col sm>
          <H6Tag>ADATVÉDELEM</H6Tag>
          <p>
            Adatvédelmi tájékoztató
            <br />
            Sütik
            <br />
            Oldaltérkép
            <br />
            {/* <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> által készített ikonok a <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">flaticon.com</a> oldalról */}
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="backgroundColor2">
          <PtagCopyright>
            Copyright© 2015-{new Date().getFullYear()} Nyolcágú Jóga Alapítvány
            | Designed by <Link href="https://omworks.hu" target="_blank">OM_Works_Yoga_Creatives</Link>
          </PtagCopyright>
        </Col>
      </Row>
    </Container>
  );
};

const Icons = ({ src, alt, url, eventHandler }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={src}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt={alt}
        onMouseEnter={(e) => eventHandler(e)}
        onMouseLeave={(e) => eventHandler(e)}
      />
    </a>
  );
};

const H5Tag = styled.h5`
  padding-top: 30px;
  padding-bottom: 20px;
  color: black;
  text-align: center;
`;

const H6Tag = styled.h6`
  font-family: monospace;
`;

const PtagCopyright = styled.p`
  padding-top: 10px;
  color: white;
  text-align: center;
`;

export default Footer;
