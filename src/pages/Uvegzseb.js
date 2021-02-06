import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head1 from '../components/StyledComponents/Head1';
import Head3 from '../components/StyledComponents/Head3';
import UvegzsebTable from '../components/UvegzsebTable';
import UvegzsebKiadas from '../components/UvegzsebKiadas';

const Uvegzseb = () => {
    return (
      <Container fluid className='maincontainer'>
        <Container>
          <Head1>Üvegzseb</Head1>
            <Row className="justify-content-md-center">
              <Col className="justify">
                <p>A Nyolcágú Jóga Alapítvány a bizalom és átláthatóság céljából létrehozta az üvegzseb oldalt. Projektjeink, működésünk cashfloja itt tekinthető meg.</p>
                <Head3>2021-ben beérkezett magán- és intézményi támogatások</Head3>
                <p>(Ha a táblázat üres, akkor ebben az évben még nem kaptunk támogatást. A táblázatot hetente frissítjük. Ha van mivel...)</p>
                <UvegzsebTable /><br />
                <Head3>Kiadásaink 2021-ben</Head3>
                <UvegzsebKiadas /><br />
              </Col>
            </Row>
        </Container>
      </Container>
    );
};

export default Uvegzseb;