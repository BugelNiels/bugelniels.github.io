import React from 'react';
import {openInNewTab} from "../util/newTabOpener";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "react-bootstrap/Button";
import {Download, LinkedIn} from "@mui/icons-material";
import ProfileIcon from "../images/me.jpg";

const LandingPage = () => {
    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-6 col-lg-3 text-start align-items-center d-flex">
                <div className="row">

                    <div className="pt-5 pb-3">
                        <h1>Niels Bugel</h1>
                        <p style={{color: "grey", fontSize: "larger"}}>Developer by day, asleep by night</p>
                    </div>
                    <p style={{fontSize: "larger"}}>
                        Hi there! I'm a software developer with a passion for Computer Graphics, Image-Processing,
                        High-Performance Computing and drinking water.
                    </p>
                    <div className="row justify-content-center mt-3">
                        <div className="col-12 text-center">
                            <Button className="me-4 mb-4"
                                    variant="primary"
                                    onMouseDown={() => openInNewTab("downloads/resume_niels_bugel.pdf")}>
                                <Download/> Download CV
                            </Button>
                            <Button className="me-4 mb-4"
                                    variant="secondary"
                                    onMouseDown={() => openInNewTab("https://github.com/BugelNiels")}>
                                <GitHubIcon/> GitHub
                            </Button>
                            <Button className="me-4 mb-4"
                                    variant="secondary"
                                    onMouseDown={() => openInNewTab("https://www.linkedin.com/in/nielsbugel")}>
                                <LinkedIn/> LinkedIn
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <div className="image-container">
                    <img
                        className="d-block w-100 h-100"
                        src={ProfileIcon}
                        alt="Profile pic"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;