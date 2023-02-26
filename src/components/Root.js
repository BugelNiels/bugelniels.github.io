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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="container-fluid d-flex h-100 flex-column">
                <Outlet />
            </div>

            <div className="footer container-fluid">

                <div className="row justify-content-center p-3 mb-1">
                    <div className="col-md-2">
                        <Link to="mailto:bugel.niels@gmail.com">Email</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="https://github.com/BugelNiels" target="_blank" rel="noopener noreferrer">GitHub</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="https://www.linkedin.com/in/nielsbugel" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    </div>
                    <div className="col-md-2">
                        <Link to="https://www.artstation.com/bugelniels" target="_blank" rel="noopener noreferrer">Artstation</Link>
                    </div>
                </div>
                <div className="row justify-content-center p-1 mb-0">
                    <p>
                        &copy; 2023 All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Root
