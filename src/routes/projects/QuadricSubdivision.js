import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

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
                {id: "opengl", name: "OpenGL"}
            ]}
            image="https://github.com/BugelNiels/quadric-subdivision/raw/main/screenshots/ui.png">
            <Card.Text>
                Framework developed for viewing and subdividing 3D meshes using the newly developed quadric subdivision
                method.
            </Card.Text>
        </Project>
    );
};

export default QuadricSubdivisionProject;
