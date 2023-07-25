import React from 'react';
import '../styles/index.css';

import data from '../assets/data/projects.json';
import NitroProject from './projects/nitro';

const ProjectsPage = () => {

    return (
        <>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                <div className="col-lg-6 col-md-8 col-sm-10">
                <NitroProject />
                </div>
            </div>

            <div className="row justify-content-center p-2 col-lg-6 col-md-8 col-sm-10">
                <div className="col-6">
                    <NitroProject />
                </div>
                <div className="col-6">
                    <NitroProject />
                </div>
            </div>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-md-6 text-start">
                    {/* TODO: add logo here */}
                    <h3>University Projects</h3>
                    In my time as a Teaching Assistant at the University of Groningen, I have worked on a significant number of both small and large projects.
                    This ranged from small tasks such as refactoring assignment skeleton code to designing, writing and implementing large course assignments/projects from scratch.
                    The majority of these projects were implemented in C, C++ or Java.
                    Below you can find a very small portion of the projects I did for the university. Due to (hopefully obvious) reasons, the source code for these projects is not public.
                </div>
            </div>
            <div className="row justify-content-center p-5">
            </div>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Technologies</h1>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                Cool stuff
            </div>
        </>
    );
};

export default ProjectsPage;
