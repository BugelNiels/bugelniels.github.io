import React from 'react';
import EducationPage from './education/EducationPage.js';
import ExperiencePage from './experience/ExperiencePage.js';
import ProjectsPage from './projects/ProjectsPage.js';
import AboutMe from "./aboutme/AboutMePage";
import SkillsPage from "./skills/SkillsPage";
import LandingPage from "./LandingPage";


const HomePage = () => {
    return (
        <>
            <div id="home" className="row justify-content-center p-5 secondary-comp">
                <LandingPage />
            </div>
            <div id="education" className="row justify-content-center p-5 ">
                <ProjectsPage/>
            </div>
            <div id="experience" className="row justify-content-center p-5 secondary-comp">
                <AboutMe/>
            </div>
            <div id="projects" className="row justify-content-center p-5">
                <ExperiencePage/>
            </div>
            <div id="skills" className="row justify-content-center p-5 secondary-comp">
                <EducationPage/>
            </div>
            <div id="aboutme" className="row justify-content-center p-5">
                <SkillsPage/>
            </div>
        </>
    );
};

export default HomePage;
