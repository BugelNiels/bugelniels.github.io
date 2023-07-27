import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/matig.webp"
import ReadMore from "../../ReadMore";

const MatigProject = () => {

    return (
        <Project
            title="MATIG"
            languages={[
                {id: "javascript", name: "Javascript"}
            ]}
            technologies={[
                {id: "react", name: "React"},
                {id: "express", name: "ExpressJs"},
                {id: "mongodb", name: "MongoDB"},
                {id: "redis", name: "Redis"},
                {id: "kubernetes", name: "Kubernetes"}
            ]}
            image={ProjectImage}>
            <Card.Text>
                MATIG is a system that simplifies the organisation and improves the efficiency of the matching procedure
                for several studies at the Faculty of Science and Engineering.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    When I first started as a Teaching Assistant (TA) for the matching procedure, there was a significant amount of manual labour involved in the export process.
                    Initially, I created a spreadsheet (which evolved later on into a Java application) to automate this for myself, but I also wanted the other TAs to benefit from this.
                    As such, I built MATIG.
                </Card.Text>
                <Card.Text>
                    MATIG contains functionality for both the matching TAs and the coordinating team. It allows for full configuration of how scores should be calculated and exported.
                    It uses React for the frontend, Express.js for the backend, and MongoDB for storing the users and matching classes. Redis is used for caching to ensure good performance.
                    The website was deployed using Kubernetes on the CIT servers of the RUG.
                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default MatigProject;
