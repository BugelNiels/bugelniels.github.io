import * as React from "react"
import {Nav, Navbar} from "react-bootstrap";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link as ScrollLink} from 'react-scroll';
import {openInNewTab} from "../util/newTabOpener";


const PersonalNavBar = () => {
    return (
        <Navbar className="container-fluid" sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle className="m-3" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link offset={-70} as={ScrollLink} to="home" smooth={true}>Home</Nav.Link>
                    <Nav.Link offset={-70} as={ScrollLink} to="education" smooth={true}>Education</Nav.Link>
                    <Nav.Link offset={-70} as={ScrollLink} to="experience" smooth={true}>Experience</Nav.Link>
                    <Nav.Link offset={-70} as={ScrollLink} to="projects" smooth={true}>Projects</Nav.Link>
                    <Nav.Link offset={-70} as={ScrollLink} to="skills" smooth={true}>Skills</Nav.Link>
                    <Nav.Link offset={-70} as={ScrollLink} to="aboutme" smooth={true}>About Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="ms-auto">
                <GitHubIcon
                    className="clickable-icon me-2"
                    onMouseDown={() => openInNewTab("https://github.com/BugelNiels")}
                />
                <LinkedInIcon
                    className="clickable-icon me-2"
                    onMouseDown={() => openInNewTab("https://www.linkedin.com/in/nielsbugel")}
                />
                <MailIcon
                    className="clickable-icon me-2"
                    onMouseDown={() => openInNewTab("mailto:bugel.niels@gmail.com")}
                />
            </Navbar.Brand>
        </Navbar>
    )
}

export default PersonalNavBar;