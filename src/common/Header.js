import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none' ,
        marginLeft: '20px',
        fontSize:'20px',
        fontWeight:'600',
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>WALLET GALLERY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link style= {navStyle} to="/home">Home</Link>
                        <Link style= {navStyle} to="/products">Products</Link>
                    </Nav>
                    <Nav>
                        <Link style= {navStyle} to="/about">About</Link>
                        <Link style= {navStyle} to="/memes">Dank memes</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;