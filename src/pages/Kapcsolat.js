import React from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleMap from '../components/GoogleMap';
import Head1 from '../components/StyledComponents/Head1';
import ButtonInputStyle from '../components/StyledComponents/ButtonInputStyle';
import './Kapcsolat.css';


export default function Kapcsolat() {
  function sendEmail(e) {
    e.preventDefault();


    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_KEY,
        process.env.REACT_APP_EMAILJS_TEMPLATE_KEY,
        e.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (

   <form className="contact-form" onSubmit={sendEmail}>
     
     <GoogleMap />
      <Container>
        
        <Row>
          <Col>
            <Head1>Kapcsolat</Head1>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <input type="text" name="user_name" placeholder="Feladó neve*" className="InputMassage"/>
            <input type="email" name="user_email" placeholder="E-mail cím*" className="InputMassage1"/>
          </Col>
          <Col sm={8}>
            <textarea name="message" placeholder="Üzenet*" className="TextAreaStyle" />
          </Col>
          <Col>
            <ButtonInputStyle type="submit" value="Küldés"></ButtonInputStyle>
          </Col>
        </Row>
        <Row>
          <Col><p>A *-al jelőlt mezők kitöltése kötelező. Ha az üzeneted rendben megérkezett hozzánk, rendszerünk automata visszaigazolást küld részedre. Ha nem találod a visszaigazolást nézd meg a spam/kéretlen mappádban is.</p></Col>
        </Row>  
      </Container>
      </form>
      
  );
}


