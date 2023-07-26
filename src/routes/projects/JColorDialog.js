import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";
import ProjectImage from "../../assets/images/colordialog.webp"

const JColorDialogProject = () => {

    return (
        <Project
            title="JColorDialog"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "maven", name: "Maven"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/JColorDialog">
            <Card.Text>
                JColorDialog is meant as an improvement over the default JColorChooser. It provides a better looking
                interface for picking colors.
            </Card.Text>
        </Project>
    );
};

export default JColorDialogProject;
