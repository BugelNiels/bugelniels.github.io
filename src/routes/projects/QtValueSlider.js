import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

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
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
            github="https://github.com/BugelNiels/qt-value-slider">
            <Card.Text>
                Implementation of a custom Qt widget for numbers similar to the number controls in Blender.
            </Card.Text>
        </Project>
    );
};

export default QtValueSliderProject;
