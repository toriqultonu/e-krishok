import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import "./header.css";

export default function Appheader() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="BrandLogo.png" alt="Brand Logo" height={30} width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto middle">
              <Nav.Link href="/tools-list">Tools List</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/tractor">Tractor</NavDropdown.Item>
                <NavDropdown.Item href="/weeder">Weed Remover</NavDropdown.Item>
                <NavDropdown.Item href="/plow">Plow</NavDropdown.Item>
                <NavDropdown.Item href="/salo-achine">
                  Salo Machine
                </NavDropdown.Item>
                <NavDropdown.Item href="/sprayers">Sprayers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#ai-features">AI Features</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
            <Nav className="right">
              <Button
                className="nav-button"
                variant="success"
                href="/add-tools"
              >
                Add Tools
              </Button>
              <Button
                className="nav-button"
                variant="outline-success"
                href="/login"
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
