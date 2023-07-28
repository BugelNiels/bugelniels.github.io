import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/mirror.webp";

const PersonalWebsiteProject = () => {

    return (
        <Project
            title="Personal Website"
            languages={[
                {id: "javascript", name: "Javascript"}
            ]}
            technologies={[
                {id: "react", name: "React"},
                {id: "gatsby", name: "Gatsby"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/bugelniels.github.io">
            <Card.Text>
                The website you are looking at right now.
            </Card.Text>
        </Project>
    );
};

export default PersonalWebsiteProject;
