import React from 'react';
import Button from "react-bootstrap/Button";
import {StaticImage} from "gatsby-plugin-image";
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
                    <p style={{fontSize: "larger"}}>
                        Hi there! I'm a software developer with a passion for Computer Graphics, Image-Processing,
                        High-Performance Computing and drinking water.
                    </p>
                    <div className="justify-content-center mt-3">
                        <div className="col-12 ">
                            <Button className="mb-4"
                                    variant="primary"
                                    href="downloads/niels-bugel-resume.pdf"
                                    target="_blank" rel="noopener noreferrer">

                                <DownloadIcon/> Download CV
                            </Button>
                        </div>
                        <div className="col-12">
                            <Button className="me-4 mb-4"
                                    variant="secondary"
                                    href="https://github.com/BugelNiels"
                                    target="_blank" rel="noopener noreferrer">
                                <GitHubIcon/> GitHub
                            </Button>
                            <Button className="mb-4"
                                    variant="secondary"
                                    href="https://www.linkedin.com/in/nielsbugel"
                                    target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon/> LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 order-1 order-lg-2">
                <div className="image-container">
                    <StaticImage
                        className="w-50 h-100"
                        src="../images/me.webp"
                        alt="Photo"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
