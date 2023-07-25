import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const ConicSubdivisionProject = () => {

    return (
        <Project
            title="Conic Curve Subdivision"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "openmp", name: "OpenMP"},
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"}
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png">
            <Card.Text>
                Framework developed for manipulating and subdividing curves using the newly developed conic subdivision method.
            </Card.Text>
        </Project>
    );
};

export default ConicSubdivisionProject;
