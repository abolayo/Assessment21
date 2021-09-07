import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant="light"
    >
      <Container >
        <Navbar.Brand  href="/">
          <span className="food">Food</span>
          <span className="bag">Bag</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/Cart" className="Cart">Cart</Nav.Link>
            <Nav.Link href="/" className="Login">Login</Nav.Link>
            <Button className="signUp" variant="outline-danger">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
