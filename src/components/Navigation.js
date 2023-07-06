import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="primary" className="text-white">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Saveetha Kathiravan
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link
            onClick={() => handlePageChange("aboutme")}
            href="#aboutMe"
            className="text-white"
          >
            About Me
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("work")}
            href="#work"
            className="text-white"
          >
            Work
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("resume")}
            href="#resume"
            className="text-white"
          >
            Resume
          </Nav.Link>
          <Nav.Link
            onClick={() => handlePageChange("contactMe")}
            href="#contactMe"
            className="text-white"
          >
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
