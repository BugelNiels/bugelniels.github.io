import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/valuesliders.webp";

const QtValueSliderProject = () => {

    return (
        <ProjectSection
            title="Qt Value Slider"
            languages={[
                { id: "cpp", name: "C++" }
            ]}
            technologies={[
                { id: "qt", name: "Qt" },
                { id: "cmake", name: "CMake" }
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/qt-value-slider">
            <Card.Text>
                A custom Qt widget for numbers similar to the number controls in Blender.
            </Card.Text>
        </ProjectSection>
    );
};

export { QtValueSliderProject };
