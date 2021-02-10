import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from '../components/StyledComponents/Link';
import Head1 from '../components/StyledComponents/Head1';
import egyszazalek from '..//pics/egyszazalek.pdf';
import '../components/egyszazalek.css';

const EgySzazalek = () => {
    return (
      <Container fluid className='maincontainer'>
        <Container>
          <Head1>Adó 1%</Head1>
            <Row className="justify-content-md-center">
              <Col className="justify">
                <p>Évente mintegy 10 milliárd forintról nem rendelkeznek az adózók. Ne hagyd bent az 1 százalékot, 
                  inkább add oda a Nyolcágú Jóga Alapítványnak és mi jobbá teszzük a világot.
                  Köszönjük mindenkinek, aki úgy dönt, hogy az adója 1%-ával a Nyolcágú Jóga Alapítvány munkáját támogatja.
                  Soha ennyire nem volt még ekkora szükség a jógára a legtöbb ember életében, mint most. 
                  Támogasd munkánkat, hogy minnél több emberhez eljuttathassuk ezt a nagyszerű tudomány.
                  Ha az 1% százalékodat a Nyolcágú Jóga Alapítványnak működtetésére vagy projektjeinek támogatására kívánod felajánlani 
                  (lásd a <Link href="/projektjeink">projektjeink</Link> menüpontban), a személyi jövedelemadó bevallásodban a Nyolcágú Jóga Alapítvány adószámát tüntesd fel. 
                </p> 
              </Col>
            </Row>
              <Row>
                <Col>
                  <Card className="taxnumber">
                    <Card.Header as="h3">Nyolcágú Jóga Alapítvány</Card.Header>
                    <Card.Body>
                      <Card.Title as="h1">18734373-1-41</Card.Title>
                      <Card.Text>Ezt a számot írd be a bevallásodba ha szeretnél minket támogatni.</Card.Text>
                      <Button variant="primary" href={egyszazalek} target="_blank" rel="noopener noreferrer" >Adatok letöltése .pdf-ben</Button>
                      {/* <Button variant="primary" href="http://www.nyolcag.hu/adokartya.pdf" target="_blank" rel="noopener noreferrer" >Adatok letöltése .pdf-ben</Button> */}
                    </Card.Body>
                    <Card.Footer className="text-muted"><b>Köszönjük :-)</b></Card.Footer>
                  </Card>
                </Col>
              </Row>
        </Container>
      </Container>
    );
};

export default EgySzazalek;