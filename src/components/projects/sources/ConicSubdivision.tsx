import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/conic_light.webp";
import { ReadMoreText } from "../../ReadMore";

const ConicSubdivisionProject = () => {

    return (
        <ProjectSection
            title="CONIS"
            languages={[
                { id: "cpp", name: "C++" }
            ]}
            technologies={[
                { id: "qt", name: "Qt" },
                { id: "opengl", name: "OpenGL" },
                { id: "openmp", name: "OpenMP" },
                { id: "cmake", name: "CMake" },
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/conic-subdivision">
            <Card.Text>
                A tool developed for manipulating and subdividing curves using a newly developed conic subdivision method.
                Implements the method detailed in the paper: "A point-normal interpolatory subdivision scheme preserving conics", Computer Aided Geometric Design, Vol. 111, 2024. DOI: <a className="education-link" href="https://doi.org/10.1016/j.cagd.2024.102347" target="_blank"
                            rel="noopener noreferrer">10.1016/j.cagd.2024.102347</a>
            </Card.Text>
        </ProjectSection>
    );
};

export { ConicSubdivisionProject };
