import React from 'react';
import EducationPage from './EducationPage.js';
import ExperiencePage from './ExperiencePage.js';
import ProjectsPage from '../routes/ProjectsPage.js';
import AboutMe from "./AboutMePage";
import {openInNewTab} from "../util/newTabOpener";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "react-bootstrap/Button";
import {Download, LinkedIn} from "@mui/icons-material";


const HomePage = () => {
    return (
        <>
            <div id="home" className="row justify-content-center p-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h3>Niels Bugel</h3>
                        <p>
                            Welcome to my website.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <Button className="m-2" variant="primary" onMouseDown={() => openInNewTab("https://github.com/BugelNiels")}><Download/> Download CV</Button>
                        <Button className="m-2" variant="secondary" onMouseDown={() => openInNewTab("https://github.com/BugelNiels")}><GitHubIcon/> GitHub</Button>
                        <Button className="m-2" variant="secondary" onMouseDown={() => openInNewTab("https://www.linkedin.com/in/nielsbugel")}><LinkedIn/> LinkedIn</Button>
                    </div>
                </div>

            </div>
            <div id="education" className="row justify-content-center">
                <EducationPage/>
            </div>
            <div id="experience" className="row justify-content-center">
                <ExperiencePage/>
            </div>
            <div id="projects" className="row justify-content-center">
                <ProjectsPage/>
            </div>
            <div id="aboutme" className="row justify-content-center">
                <AboutMe/>
            </div>
        </>
    );
};

export default HomePage;
