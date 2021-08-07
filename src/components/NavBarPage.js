import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light' mb-4>
            <Container>
            <Navbar.Brand className='foodbag' href='/'>FoodBag</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'className="justify-content-end">
                    <Nav>
                        <Nav.Link href='/'>Cart</Nav.Link>
                        <Nav.Link href='/'>Login</Nav.Link>
                        <Button variant="outline-danger">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;