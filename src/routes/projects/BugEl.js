import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

import ProjectImage from "../../assets/images/bugel.webp"

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
