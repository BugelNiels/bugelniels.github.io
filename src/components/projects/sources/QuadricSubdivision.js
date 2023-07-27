import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/quadric_subdiv.webp"

const QuadricSubdivisionProject = () => {

    return (
        <Project
            title="Quadric Subdivision"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"},
                {id: "openmp", name: "OpenMP"},
                {id: "qmake", name: "QMake"},
            ]}
            image={ProjectImage}>
            <Card.Text>
                Application I developed for viewing and subdividing 3D meshes using a newly developed quadric
                subdivision method. The remaining details are classified for now...
            </Card.Text>
        </Project>
    );
};

export default QuadricSubdivisionProject;
