import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UvegzsebTable from '../components/UvegzsebTable';
import UvegzsebKiadas from '../components/UvegzsebKiadas';
import {Helmet} from "react-helmet";
import './uvegzseb.css';

const Uvegzseb = () => {
    return (
      <Container fluid className='maincontainer'>
        <Helmet>
          <title>Üvegzseb - Nyolcág</title>
        </Helmet>
        <Container>
          <h1>Üvegzseb</h1>
            <Row className="justify-content-md-center">
              <Col className="justify">
                <p>A Nyolcágú Jóga Alapítvány a bizalom és átláthatóság céljából létrehozta az üvegzseb oldalt. Projektjeink, működésünk cashfloja itt tekinthető meg.</p>
                <h3>2021-ben beérkezett magán- és intézményi támogatások</h3>
                <UvegzsebTable /><br />
                <p>*Az adományozó hozzájárulásának lekérdezése folyamatban van, hogy hozzájárul-e a nevének megjelenéséhez.</p>
                <h3>Kiadásaink 2021-ben</h3>
                <UvegzsebKiadas /><br />
              </Col>
            </Row>
        </Container>
      </Container>
      
    );
};

export default Uvegzseb;