import * as React from "react"
import '../styles/App.css';
import "../styles/index.css"
import '../styles/Navbar.css';
import {Nav, Navbar} from "react-bootstrap";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "../components/HomePage";
import { Link as ScrollLink } from 'react-scroll';


const IndexPage = () => {
  return (
    <main className="App main-container flex-column">
        <Navbar className="container-fluid" sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
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
        </Navbar>

        <div className="container-fluid flex-grow-1">
            <HomePage/>
        </div>

        <div className="footer container-fluid secondary-comp p-5">

            <div className="row d-flex justify-content-center p-3 mb-1">
                <div className="col-2">
                    <a href="mailto:bugel.niels@gmail.com" className="clickable-link">
                        <MailIcon className="footer-icon"/> <span>bugel.niels@gmail.com</span>
                    </a>
                </div>
                <div className="col-2">
                    <a href="https://github.com/BugelNiels" target="_blank" rel="noopener noreferrer"
                       className="clickable-link">
                        <GitHubIcon className="footer-icon"/> <span>BugelNiels</span>
                    </a>
                </div>
                <div className="col-2">
                    <a href="https://www.linkedin.com/in/nielsbugel" target="_blank" rel="noopener noreferrer"
                       className="clickable-link">
                        <LinkedInIcon className="footer-icon"/> <span>Niels Bugel</span>
                    </a>
                </div>
            </div>
            <div className="row justify-content-center pt-4 mb-0">
                <p>
                    &copy; 2023 Niels Bugel. All rights reserved.
                </p>
            </div>
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Niels Bugel</title>
