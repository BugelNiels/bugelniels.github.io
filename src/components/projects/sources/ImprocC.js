import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/improcc.webp";

const ImprocCProject = () => {

    return (
        <Project
            title="ImprocC"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
                {id: "opengl", name: "OpenGL"},
                {id: "make", name: "Make"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/improcc"
            docs="https://github.com/BugelNiels/improcc/wiki/Documentation">
            <Card.Text>
                A simple image-processing framework written in C. Developed from scratch for the course Image Processing.
            </Card.Text>
        </Project>
    );
};

export default ImprocCProject;
