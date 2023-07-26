import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";

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
            github="https://github.com/BugelNiels/improcc">
            <Card.Text>
                A simple image-processing framework written in C. Developed from scratch for the course Image Processing.
            </Card.Text>
        </Project>
    );
};

export default ImprocCProject;
