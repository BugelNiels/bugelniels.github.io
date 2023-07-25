import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const ImprocCProject = () => {

    return (
        <Project
            title="ImprocC"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
            github="https://github.com/BugelNiels/improcc">
            <Card.Text>
                A simple image-processing framework written in C. Developed from scratch for the course Image Processing.
            </Card.Text>
        </Project>
    );
};

export default ImprocCProject;
