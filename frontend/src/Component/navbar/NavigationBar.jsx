import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import "../NavigationBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'
import HighLight from './../highlight/HighLights';

function NavigationBar() {
  return (
    <Navbar expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="/"> <img src="Larana__Inc.-removebg-preview.png" alt="" id="logoImg" /> Sport <Badge bg="danger">News </Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="me-auto">
            <Nav.Link href="/home" id="/home">Home</Nav.Link>
            <Nav.Link href="/news" id="/news">News</Nav.Link>
            <Nav.Link href="/highlights" id="/highlights">HighLights</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="icons" style={{ display: "flex", justifyContent: "space-between" }}>
          <FaFacebook style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          <FaTwitter style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          <FaInstagram style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          <FaYoutube style={{fontSize: "24px", cursor: "pointer"}}/>
        </div>

        
      </Container>
    </Navbar>
  );
}

export default NavigationBar;