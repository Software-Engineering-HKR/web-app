import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SensorContext } from '../context/GlobalState';
import homeIcon from '../assets/home-icon1.png';

function Header() {
  const { user } = useContext(SensorContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={homeIcon} alt="Home Icon" width="30" height="30" className="d-inline-block align-top" />
          {' Smart Home'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user" className="ml-auto">{user?.username}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
