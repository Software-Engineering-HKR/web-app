import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SensorContext } from '../context/GlobalState';
import homeIcon from '../assets/home-icon1.png';

function Header() {
  const { user } = useContext(SensorContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{fontSize: "20px" }}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={homeIcon} alt="Home Icon" width="30" height="30" className="d-inline-block align-top rounded-circle" style={{ marginRight: '10px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Smart Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/user" className="ml-auto" style={{ border: '1px gray', borderRadius: '10px', backgroundColor: 'white' }}>{user?.username}</Nav.Link> 
            <Nav.Link href="/user" className="ml-auto"  style={{ color: 'red' }}>{"Log out"}</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
