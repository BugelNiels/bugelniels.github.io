import React from 'react';

import { NitroProject } from './sources/Nitro';
import { GpuConvolutionProject } from "./sources/GpuConvolution";
import { GpuSubdivisionProject } from "./sources/GpuSubdivision";
import { CpuSubdivisionProject } from "./sources/CpuSubdivision";
import { MatigProject } from "./sources/Matig";
import { ConicSubdivisionProject } from "./sources/ConicSubdivision";
import { QuadricSubdivisionProject } from "./sources/QuadricSubdivision";
import { ImprocCProject } from "./sources/ImprocC";
import { CCheckmateProject } from "./sources/CCeckmate";
import { JColorDialogProject } from "./sources/JColorDialog";
import { BugElProject } from "./sources/BugEl";
import { QtValueSliderProject } from "./sources/QtValueSlider";
import { PersonalWebsiteProject } from "./sources/PersonalWebsite";
import { StockMarketProject } from "./sources/StockMarket";
import { FlapsProject } from "./sources/Flaps";
import { ShowMoreButton } from "../ShowMore";
import { CepvProject } from './sources/Cepv';


const projectItems = (items: React.ReactNode[]) => {
    return items.map(item => {
        return (
            <div className="col-12 col-lg-6">
                {item}
            </div>
        );
    });
}

const ProjectsPage = () => {

    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-6">
                    <h1>Projects</h1>
                    Below you can find some of my personal projects. Sadly, with a full-time job I don't much time to work on personal projects so you won't see much activity on my GitHub account.
                    In case you are curious about what I am working on these days, feel free to have a look on my <a className="education-link" href="https://gitlab.cern.ch/nbugel" target="_blank" rel="noopener noreferrer">CERN GitLab account</a> instead.
                </div>
            </div>

            <div className="col-lg-8 col-12">
                <div className="row">
                    {projectItems([
                        <NitroProject />,
                        <ConicSubdivisionProject />,
                        <GpuConvolutionProject />,
                        <GpuSubdivisionProject />
                    ])}
                </div>

                <ShowMoreButton>
                    <div className="row">
                        {projectItems([,
                            <CepvProject />,
                            <MatigProject />,
                            <StockMarketProject />,
                            <FlapsProject />,
                            <QuadricSubdivisionProject />,
                            <CpuSubdivisionProject />,
                            <ImprocCProject />,
                            <CCheckmateProject />,
                            <JColorDialogProject />,
                            <BugElProject />,
                            <QtValueSliderProject />,
                            <PersonalWebsiteProject />
                        ])}
                    </div>
                </ShowMoreButton>
            </div>
        </>
    );
};

export { ProjectsPage };
