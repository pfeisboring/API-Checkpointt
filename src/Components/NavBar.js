import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Navbar bg="blue" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="app-link">
              Home
            </Link>
            <Link to="/users" className="app-link">
              Users
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
