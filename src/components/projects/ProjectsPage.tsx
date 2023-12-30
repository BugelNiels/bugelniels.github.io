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
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="row p-2">
                    <NitroProject />
                </div>

                <div className="row">
                    {projectItems([
                        <GpuConvolutionProject />,
                        <GpuSubdivisionProject />,
                        <MatigProject />,
                        <ConicSubdivisionProject />,
                        <StockMarketProject />,
                        <FlapsProject />
                    ])}
                </div>

                <ShowMoreButton>
                    <div className="row">
                        {projectItems([
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
