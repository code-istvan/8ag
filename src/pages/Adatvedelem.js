import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import "./adatvedelem.css";

const Adatvedelem = () => {
  return (
    <Container fluid className="maincontainer">
      <Helmet>
        <title>Adatvédelem - Nyolcág</title>
      </Helmet>
      <Row>
        <Col>
          <h1>Adatvédelmi tájékoztató</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaddingP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu quam eu dui hendrerit aliquam. Vestibulum lectus elit, congue ac
            elit eu, lacinia tincidunt nunc. Suspendisse lobortis convallis
            tristique. In et euismod nisi, at pharetra enim. Curabitur pulvinar,
            diam at ornare dignissim, mi risus egestas ligula, ut dapibus nunc
            lectus vel sapien. Cras velit dui, fermentum id augue nec,
            consectetur laoreet nisl. Aliquam a ullamcorper ipsum. Duis non nisi
            tristique, dapibus urna id, cursus nibh. Praesent arcu nisl, congue
            sit amet ex nec, fermentum eleifend mauris. In eu orci interdum,
            interdum orci ac, fermentum lacus. Nulla molestie odio eu sapien
            elementum, ac dictum ante rutrum. Pellentesque at vehicula turpis,
            vitae fringilla velit. Suspendisse dui elit, pulvinar non fermentum
            vitae, molestie sollicitudin felis. Nam et euismod nisi.
            Pellentesque mollis sagittis felis, quis pretium lorem iaculis a.
            Nunc ac magna ac elit laoreet sodales. Sed pellentesque ornare nunc
            et cursus. Curabitur venenatis varius est eu dapibus. Aenean non
            neque nec lectus sagittis venenatis. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Vivamus
            tincidunt dolor quis ipsum lobortis, vel congue arcu dapibus.
            Curabitur vel faucibus augue, nec viverra orci. Duis sed semper
            lectus, vitae porttitor dolor. Proin sollicitudin sapien mi, vitae
            laoreet justo vulputate nec. Quisque neque ligula, consectetur a
            arcu nec, facilisis venenatis arcu. Praesent mollis turpis
            consequat, luctus est sit amet, cursus ex. Maecenas vel pretium
            nisl. Etiam consectetur fermentum diam a laoreet. Etiam eu lectus
            mauris. Sed congue turpis risus, ac tempor nibh ornare vel.
            Curabitur at ante semper, congue arcu nec, sollicitudin elit. Nulla
            non aliquam lectus. Curabitur at aliquam eros, id consequat nunc.
            Donec pretium varius elementum. Mauris nec rhoncus metus, non
            gravida velit. Donec dui nisl, pharetra eget euismod ut, mollis nec
            arcu. Nullam molestie, dui in sagittis auctor, urna dui ullamcorper
            arcu, id sodales metus tellus sit amet dui. Aenean erat nulla,
            sollicitudin sit amet nunc eu, viverra maximus eros. Vestibulum
            maximus lorem neque, vitae lobortis odio venenatis id. Nam volutpat
            pulvinar augue, ut tincidunt nibh mollis ac. Aenean sit amet dictum
            justo. Etiam mattis turpis a felis lobortis viverra. Ut in hendrerit
            metus. Praesent efficitur tincidunt lacus. Cras tincidunt
            ullamcorper augue eget porttitor. Nam iaculis condimentum mauris.
            Vestibulum blandit in nulla sit amet sodales. Curabitur sollicitudin
            tempor neque, in vulputate ex tincidunt non. Etiam vitae commodo
            nisl, vel imperdiet tortor. Aenean accumsan quam augue, sit amet
            auctor nunc fermentum at. Vivamus commodo mollis lorem eleifend
            tempor. Vestibulum orci risus, ornare quis felis et, pellentesque
            ornare risus. Duis fermentum non erat ac lacinia. Sed fringilla nunc
            ut finibus condimentum. Donec iaculis sed felis vitae malesuada.
            Etiam at mi ornare, vulputate ante sit amet, interdum urna. Donec
            sed molestie magna. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Donec vitae metus ex.
            Maecenas congue id nisi nec tincidunt. Praesent tellus libero,
            egestas sit amet viverra vel, bibendum at massa. Nunc scelerisque
            magna ut molestie finibus. Maecenas volutpat, lectus a varius
            venenatis, quam leo maximus risus, ut auctor risus quam vel ligula.
            Aenean sollicitudin sapien a tincidunt venenatis. Nullam elementum
            pretium ornare. Maecenas tincidunt finibus sollicitudin.
          </PaddingP>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="justify">
          <p>Teszt</p>
        </Col>
      </Row>
    </Container>
  );
};

//Styled Components
const PaddingP = styled.p`
  text-align: justify;
`;

export default Adatvedelem;
