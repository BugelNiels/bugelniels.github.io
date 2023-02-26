import React from 'react';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Navbar.css';

const Root = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                {/* <Navbar.Brand as={Link} to="/">
                <img
                    alt=""
                    src="placeholder"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                MATIG
            </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Root
