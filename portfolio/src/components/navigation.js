import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navigation extends Component {
    render() {
        return (
          <Container fluid className="px-0">
              <Navbar expand="lg">
                  <Container>
                      <Navbar.Brand href="/">Kat Lopez</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            {/* <Nav.Link href="/projects">Projects & Work</Nav.Link> */}
                            <NavDropdown title="Projects & Work" id="nav-dropdown">
                                <NavDropdown.Item href="/projects/slap">Security Learning Academy Portal</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Security Learning Academy</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">swim.me</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.4">UClean</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/about-me">About Me</Nav.Link>
                      </Nav>
                      <Nav>
                            <Nav.Link href="https://linkedin.com/in/kkatlopez" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i></Nav.Link>
                      </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </Container>
        );
    }
  }
  
  export default Navigation;