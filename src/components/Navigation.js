import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Saveetha Kathiravan</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handlePageChange("aboutMe")} href="#aboutMe">
            About Me
          </Nav.Link>
          <Nav.Link onClick={() => handlePageChange("work")} href="#work">
            Work
          </Nav.Link>
          <Nav.Link onClick={() => handlePageChange("resume")} href="#resume">
            Resume
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("contactMe")}
            href="#contactMe"
          >
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
