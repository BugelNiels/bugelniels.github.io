import React from 'react';

import NitroProject from './sources/Nitro';
import GpuConvolutionProject from "./sources/GpuConvolution";
import GpuSubdivisionProject from "./sources/GpuSubdivision";
import CpuSubdivisionProject from "./sources/CpuSubdivision";
import MatigProject from "./sources/Matig";
import ConicSubdivisionProject from "./sources/ConicSubdivision";
import QuadricSubdivisionProject from "./sources/QuadricSubdivision";
import ImprocCProject from "./sources/ImprocC";
import CCheckmateProject from "./sources/CCeckmate";
import JColorDialogProject from "./sources/JColorDialog";
import BugElProject from "./sources/BugEl";
import QtValueSliderProject from "./sources/QtValueSlider";
import PersonalWebsiteProject from "./sources/PersonalWebsite";
import StockMarketProject from "./sources/StockMarket";
import FlapsProject from "./sources/Flaps";
import ShowMoreButton from "../ShowMore";

const ProjectsPage = () => {

    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-6">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="row justify-content-center p-2">
                    <NitroProject/>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <GpuConvolutionProject/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <GpuSubdivisionProject/>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div id="matig" className="col-12 col-lg-6">
                        <MatigProject/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ConicSubdivisionProject/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6">
                        <StockMarketProject/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <FlapsProject/>
                    </div>
                </div>

                <ShowMoreButton>


                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <QuadricSubdivisionProject/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <CpuSubdivisionProject/>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <ImprocCProject/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <CCheckmateProject/>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <JColorDialogProject/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <BugElProject/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <QtValueSliderProject/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <PersonalWebsiteProject/>
                        </div>
                    </div>
                </ShowMoreButton>
            </div>
        </>
    );
};

export default ProjectsPage;
