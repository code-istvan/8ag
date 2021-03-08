import React from "react";
import emailjs from "emailjs-com";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleMap from "../components/GoogleMap";
import ButtonInputStyle from "../components/StyledComponents/ButtonInputStyle";
import ReactDOM from "react-dom";
import "./Kapcsolat.css";
// import Checkbox from "../components/Checkbox";
import { Helmet } from "react-helmet";
import Link from "../components/StyledComponents/Link";

const Kapcsolat = () => {
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
          e.target.value = "";
          inputClick2(e);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const inputClick2 = (e) => {
    e.target.value
      ? ReactDOM.render(
          <React.Fragment>
            <ButtonInputStyle type="submit" value="Küldés"></ButtonInputStyle>
            <input
              type="checkbox"
              id="gdpr"
              name="gdpr"
              value="true"
              required
            ></input>
            <label for="gdpr">
              Megismertem és elfogadom az{" "}
              <Link href="/adatvedelem"> Adatvédelmi tájékoztatót</Link>,
              hozzájárulok személyes adataim kezeléséhez
            </label>
            <p>
              Ha az üzeneted rendben megérkezett hozzánk, rendszerünk automata
              visszaigazolást küld részedre. Ha nem találod a visszaigazolást
              nézd meg a spam/kéretlen mappádban is.
            </p>
            <br />
          </React.Fragment>,
          document.getElementById("lol2")
        )
      : ReactDOM.render("", document.getElementById("lol2"));
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <GoogleMap />
      <Container className="kapcsolatContainer">
        <Helmet>
          <title>Kapcsolat - Nyolcág</title>
        </Helmet>
        <Row>
          <Col>
            <h1>Kapcsolat</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <input
              type="text"
              name="user_name"
              placeholder="Feladó neve*"
              className="InputMassage"
              autoComplete="off"
              onChange={inputClick2}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail cím*"
              className="InputMassage1"
              autoComplete="off"
              onChange={inputClick2}
              required
            />
          </Col>
          <Col sm={8}>
            <textarea
              name="message"
              placeholder="Üzenet*"
              className="TextAreaStyle"
              autoComplete="off"
              onChange={inputClick2}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col id="lol2"></Col>
        </Row>
      </Container>
    </form>
  );
};

export default Kapcsolat;
