import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import "../NavigationBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'



  function NavigationBar() {
    const facebookLink = 'https://www.facebook.com/Alawode Purity';
    const twitterLink = 'https://twitter.com/yourhandle';
    const instagramLink = 'https://www.instagram.com/Alawode_Moyosola';
    const youtubeLink = 'https://www.youtube.com/yourchannel';
  
    return (
      <>
     
    
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
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          </a>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ marginRight: "10px", fontSize: "24px", cursor: "pointer" }} />
          </a>
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ fontSize: "24px", cursor: "pointer" }} />
          </a>
        </div>
          
        </Container>
      </Navbar>
    
  </>
    )
  }
  


export default NavigationBar;