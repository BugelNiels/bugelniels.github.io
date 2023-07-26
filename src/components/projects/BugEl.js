import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";

import ProjectImage from "../../images/projects/bugel.webp"

const BugElProject = () => {

    return (
        <Project
            title="Bug-El"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "maven", name: "Maven"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/bug-el">
            <Card.Text>
                Custom Java Implementation of JUnit. Meant as a demo to demystify JUnit.
            </Card.Text>
        </Project>
    );
};

export default BugElProject;
