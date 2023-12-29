import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/improcc.webp";

const ImprocCProject = () => {

    return (
        <ProjectSection
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
                A simple image-processing framework written in C. It was developed from scratch for the course&nbsp;
                <a href="https://ocasys.rug.nl/2022-2023/catalog/course/WMCS008-05" target="_blank"
                   rel="noopener noreferrer">Image Processing</a>. The aim of this framework is to make it easy to
                save, load, view and manipulate images.
            </Card.Text>
        </ProjectSection>
    );
};

export { ImprocCProject };
