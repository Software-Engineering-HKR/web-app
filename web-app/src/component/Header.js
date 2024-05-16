import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SensorContext } from '../context/GlobalState';
import homeIcon from '../assets/home-icon1.png';

function Header() {
  const { user } = useContext(SensorContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{ fontSize: "20px" }}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={homeIcon}
            alt="Home Icon"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle"
            style={{ marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/Home">Smart Home</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/user" className="username-nav-link">
            {user?.username}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>



  );
}

export default Header;
