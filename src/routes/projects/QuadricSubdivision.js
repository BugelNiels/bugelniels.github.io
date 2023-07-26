import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";
import ProjectImage from "../../assets/images/quadric_subdiv.webp"

const QuadricSubdivisionProject = () => {

    return (
        <Project
            title="Quadric Subdivision"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "openmp", name: "OpenMP"},
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"},
                {id: "qmake", name: "QMake"},
            ]}
            image={ProjectImage}>
            <Card.Text>
                Framework developed for viewing and subdividing 3D meshes using the newly developed quadric subdivision
                method.
            </Card.Text>
        </Project>
    );
};

export default QuadricSubdivisionProject;
