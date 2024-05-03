import React from 'react';
import { EducationPage } from './education/EducationPage';
import { ExperiencePage } from './experience/ExperiencePage';
import { ProjectsPage } from './projects/ProjectsPage';
import { AboutMePage } from "./aboutme/AboutMePage";
import { LandingPage } from "./LandingPage";


const HomePage = () => {
    return (
        <>
            <div id="home" className="row justify-content-center pt-5 pb-5">
                <LandingPage />
            </div>
            <div id="experience" className="row justify-content-center pt-5 pb-5 secondary-comp">
                <ExperiencePage/>
            </div>
            <div id="education" className="row justify-content-center pt-5 pb-5">
                <EducationPage/>
            </div>
            <div id="projects" className="row justify-content-center pt-5 pb-5 secondary-comp">
                <ProjectsPage/>
            </div>
            <div id="aboutme" className="row justify-content-center pt-5 pb-5">
                <AboutMePage/>
            </div>
        </>
    );
};

export { HomePage };
