import React from 'react';
import Button from "react-bootstrap/Button";
import { StaticImage } from "gatsby-plugin-image";
import DownloadIcon from "./icons/DownloadIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const LandingPage = () => {
    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12 col-lg-3 align-items-center d-flex order-2 order-lg-1">
                <div className="row center-aligned-left-lg">
                    <div className="pt-5 pb-3">
                        <h1>Niels Bugel</h1>
                        <p className="sub-text">Developer by day, asleep by night</p>
                    </div>
                    <p style={{ fontSize: "larger" }}>
                        Hi there! I am a software developer passionate about software design, automation, computer graphics, and drinking water.
                        Currently, I am working at CERN as a software engineer in the CTA team.
                        Most of all, I enjoy learning new things, sharing knowledge, and cleaning things up (believe it or not).
                    </p>
                    <div className="justify-content-center mt-3">
                        <div className="col-12 ">
                            <Button className="mb-4"
                                variant="primary"
                                href="downloads/nielsBugelResume.pdf"
                                target="_blank" rel="noopener noreferrer">

                                <DownloadIcon /> Download CV
                            </Button>
                        </div>
                        <div className="col-12">
                            <Button className="me-4 mb-4"
                                variant="secondary"
                                href="https://github.com/BugelNiels"
                                target="_blank" rel="noopener noreferrer">
                                <GitHubIcon /> GitHub
                            </Button>
                            <Button className="mb-4 me-4"
                                variant="secondary"
                                href="https://www.linkedin.com/in/nielsbugel"
                                target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon /> LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 order-1 order-lg-2">
                <div className="image-container">
                    <StaticImage
                        className="w-75 h-100"
                        src="../images/me2.webp"
                        alt="Photo"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </div>
            </div>
        </div>
    );
};

export { LandingPage };
