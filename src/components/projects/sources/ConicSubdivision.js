import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/conic_light.webp"
import ReadMore from "../../ReadMore";

const ConicSubdivisionProject = () => {

    return (
        <Project
            title="Conic Curve Subdivision"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"},
                {id: "openmp", name: "OpenMP"},
                {id: "cmake", name: "CMake"},
            ]}
            image={ProjectImage}>
            <Card.Text>
                A tool developed for manipulating and subdividing curves using a newly developed conic subdivision method.
                Its main purpose is to quickly test and prototype various different approaches.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    The remaining details are classified for now :-)
                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default ConicSubdivisionProject;
