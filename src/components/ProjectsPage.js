import React from 'react';

import NitroProject from './projects/Nitro';
import GpuConvolutionProject from "./projects/GpuConvolution";
import GpuSubdivisionProject from "./projects/GpuSubdivision";
import CpuSubdivisionProject from "./projects/CpuSubdivision";
import MatigProject from "./projects/Matig";
import ConicSubdivisionProject from "./projects/ConicSubdivision";
import QuadricSubdivisionProject from "./projects/QuadricSubdivision";
import ImprocCProject from "./projects/ImprocC";
import CCheckmateProject from "./projects/CCeckmate";
import JColorDialogProject from "./projects/JColorDialog";
import BugElProject from "./projects/BugEl";
import QtValueSliderProject from "./projects/QtValueSlider";
import PersonalWebsiteProject from "./projects/PersonalWebsite";

const ProjectsPage = () => {

    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-6">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="row justify-content-center p-2">
                    <NitroProject/>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <GpuConvolutionProject/>
                    </div>
                    <div className="col-6">
                        <GpuSubdivisionProject/>
                    </div>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <MatigProject/>
                    </div>
                    <div className="col-6">
                        <ConicSubdivisionProject/>
                    </div>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <QuadricSubdivisionProject/>
                    </div>
                    <div className="col-6">
                        <CpuSubdivisionProject/>
                    </div>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <ImprocCProject/>
                    </div>
                    <div className="col-6">
                        <CCheckmateProject/>
                    </div>
                </div>

                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <JColorDialogProject/>
                    </div>
                    <div className="col-6">
                        <BugElProject/>
                    </div>
                </div>
                <div className="row justify-content-center p-2">
                    <div className="col-6">
                        <QtValueSliderProject/>
                    </div>
                    <div className="col-6">
                        <PersonalWebsiteProject/>
                    </div>
                </div>

            </div>
            {/*<div className="row justify-content-center p-5 secondary-comp">*/}
            {/*    <div className="col-md-6 text-start">*/}
            {/*        /!* TODO: add logo here *!/*/}
            {/*        <h3>University Projects</h3>*/}
            {/*        In my time as a Teaching Assistant at the University of Groningen, I have worked on a significant*/}
            {/*        number of both small and large projects.*/}
            {/*        This ranged from small tasks such as refactoring assignment skeleton code to designing, writing and*/}
            {/*        implementing large course assignments/projects from scratch.*/}
            {/*        The majority of these projects were implemented in C, C++ or Java.*/}
            {/*        Below you can find a very small portion of the projects I did for the university. Due to (hopefully*/}
            {/*        obvious) reasons, the source code for these projects is not public.*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="row justify-content-center p-5">*/}
            {/*</div>*/}
        </>
    );
};

export default ProjectsPage;
