// NavbarComponent.js
import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

const NavbarComponent = () => {
  const handleLogout = () => {
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Hop-In
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/create-ride" className="nav-link">
              Create Ride
            </Nav.Link>
            <Nav.Link as={Link} to="/join-ride" className="nav-link">
              Join Ride
            </Nav.Link>
            <Nav.Link as={Link} to="/ride-history" className="nav-link">
              Ride History
            </Nav.Link>
            <Nav.Link as={Link} to="/ratings" className="nav-link">
              View Rating
            </Nav.Link>
            <Nav.Link onClick={handleLogout} className="nav-link logout-link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
