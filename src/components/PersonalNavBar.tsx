import * as React from "react"
import { Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import MailIcon from "./icons/MailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";


const PersonalNavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const collapseNav = () => {
        if (!isNavCollapsed) {
            setIsNavCollapsed(true);
        }
    };

    return (
        <Navbar className="container-fluid" sticky="top" bg="light" variant="light" expand="lg"
            expanded={!isNavCollapsed}>
            <Navbar.Toggle className="m-3" aria-controls="responsive-navbar-nav" onClick={handleNavCollapse} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link onClick={collapseNav} as={ScrollLink} to="home" smooth={true}>
                        Home
                    </Nav.Link>
                    <Nav.Link onClick={collapseNav} as={ScrollLink} to="experience" smooth={true}>
                        Experience
                    </Nav.Link>
                    <Nav.Link onClick={collapseNav} as={ScrollLink} to="education" smooth={true}>
                        Education
                    </Nav.Link>
                    <Nav.Link onClick={collapseNav} as={ScrollLink} to="projects" smooth={true}>
                        Projects
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="ms-auto">
                <a href="https://github.com/BugelNiels" target="_blank" rel="noopener noreferrer"
                    className="clickable-link me-2">
                    <GitHubIcon className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/in/nielsbugel" target="_blank" rel="noopener noreferrer"
                    className="clickable-link me-2">
                    <LinkedInIcon className="footer-icon" />
                </a>
                <a href="mailto:bugel.niels@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="clickable-link me-2">
                    <MailIcon className="footer-icon" />
                </a>
            </Navbar.Brand>
        </Navbar>
    )
}

export { PersonalNavBar };
