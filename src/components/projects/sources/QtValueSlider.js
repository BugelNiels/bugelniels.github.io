import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/valuesliders.png";

const QtValueSliderProject = () => {

    return (
        <Project
            title="Qt Value Slider"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "qt", name: "Qt"},
                {id: "cmake", name: "CMake"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/qt-value-slider">
            <Card.Text>
                Implementation of a custom Qt widget for numbers similar to the number controls in Blender.
            </Card.Text>
        </Project>
    );
};

export default QtValueSliderProject;
