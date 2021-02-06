import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar8.css';
import AnimeLogo from './AnimeLogo';

const Navbar8 = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className="color-nav" variant='light' sticky="top">
      <Navbar.Brand href='/'>
        <AnimeLogo  alt='nyolcág'/>
        {/* <img
          src='http://www.nyolcag.hu/8ag.svg'
          width='70'
          height='70'
          className='d-inline-block align-top'
          alt=''
        /> */}
      </Navbar.Brand>
      <Navbar.Brand id="BrandNameFont">NYOLCÁGÚ JÓGA ALAPÍTVÁNY</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='hoover' href='/'>HOME</Nav.Link>
          <Nav.Link className='hoover' href='/projektjeink'>PROJEKTJEINK</Nav.Link>
          <NavDropdown title='TÁMOGATÁS' id='basic-nav-tamogatas'>
            <NavDropdown.Item href='/egyszazalek' id='basic-nav-tamogatas-item'>1%</NavDropdown.Item>
            <NavDropdown.Item href='/projekt' id='basic-nav-tamogatas-item'>PROJEKT</NavDropdown.Item>
            <NavDropdown.Item href='/uvegzseb' id='basic-nav-tamogatas-item'>ÜVEGZSEB</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='hoover' href='/kapcsolat'>KAPCSOLAT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar8;
