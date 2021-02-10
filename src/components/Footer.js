import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './footer.css';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import telegram from '..//pics/telegram.svg';
import messenger from '..//pics/messenger.svg';
import instagram from '..//pics/instagram.svg';
import facebook from '..//pics/facebook.svg';


const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clzffjq", 
        "template_hwenr7q", 
        e.target, 
        "user_LcygEOfMq1SIPxoAtl0rC"
      )
      .then((result) => {
          console.log(result.text);
      }, 
        (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
  }

  return (
  <Container fluid >
    <Row>
      <Col className='backgroundColorTop'><H5Tag>“A test nehézkes, az elme vibráló, a lélek sugárzó. A jóga gyakorlása kibontakoztatja a testben rejlő lehetőséget és a vibráló elme szintjére emelik, hogy mindkettő - a vibrálóvá vált test és elme - a lélek fénye felé fordulhasson.”</H5Tag><br /></Col>
    </Row>
    <Row xs={1} md={2} lg={3} className='backgroundColor'>
    <Col><H6Tag>LEGYÉL A BARÁTUNK</H6Tag>
      <a href="https://www.facebook.com/nyolcag" target="_blank" rel="noreferrer">
        <img
          src={facebook}
          width='40'
          height='40'
          className='d-inline-block align-top'
          alt=''
        />
      </a>
      <a href="https://www.instagram.com/bandhaworks/" target="_blank" rel="noreferrer">
        <img
          src={instagram}
            width='40'
            height='40'
            className='d-inline-block align-top'
          alt=''
        />
      </a>
      <a href="http://m.me/nyolcag" target="_blank" rel="noreferrer">
          <img
            src={messenger}
              width='40'
              height='40'
              className='d-inline-block align-top'
            alt=''
            />
      </a>
      <a href="https://t.me/@istvan108" target="_blank" rel="noreferrer">
        <img
          src={telegram}
            width='40'
            height='40'
            className='d-inline-block align-top'
          alt=''
        />
      </a><p />
        </Col>
        <Col>
          <H6Tag>HÍRLEVÉL</H6Tag>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="email" name="user_email" id="emailstyle" placeholder="E-mail címed"></input>
              <input type="submit" value="Küldés" id="buttonstyle"></input>
            </form>
        </Col>
        <Col><H6Tag>ADATVÉDELEM</H6Tag>
          <p>Adatvédelmi nyilatkozat<br />Sütik<br /><a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer">Freepik</a> által készített ikonok a <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">flaticon.com</a> oldalról</p>
        </Col>
          
    </Row>
    <Row>
      <Col className='backgroundColor2'><PtagCopyright>Copyright© 2015-{new Date().getFullYear()} Nyolcágú Jóga Alapítvány  |  Designed by OM_Works_Yoga_Creatives.</PtagCopyright></Col>
    </Row>
  </Container>
    );
  };

const H5Tag= styled.h5`
  padding-top: 30px;
  padding-bottom: 20px;
  color: black;
  text-align: center;
`;

const H6Tag= styled.h6`
  font-family: monospace;
`;

const PtagCopyright= styled.p`
  padding-top: 10px;
  color: white;
  text-align: center;
`;
  
  export default Footer;