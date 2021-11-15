import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>WALLET GALLERY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user?.email ?
                            // <Nav.Link as={Link} to="/dashboard">Dashbord</Nav.Link>:
                            <Button onClick={logOut} variant="secondary">Log Out</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        
                        }
                        <Nav.Link><span>{user?.displayName}</span></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;