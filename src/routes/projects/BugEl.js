import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const BugElProject = () => {

    return (
        <Project
            title="Bug-El"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
            github="https://github.com/BugelNiels/bug-el">
            <Card.Text>
                Custom Java Implementation of JUnit. Meant as a demo to demystify JUnit.
            </Card.Text>
        </Project>
    );
};

export default BugElProject;
