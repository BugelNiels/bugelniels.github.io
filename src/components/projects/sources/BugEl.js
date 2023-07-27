import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";

import ProjectImage from "../../../images/projects/bugel.webp"

const BugElProject = () => {

    return (
        <Project
            title="Bug-EL"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "maven", name: "Maven"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/bug-el">
            <Card.Text>
                A custom Java Implementation of JUnit. Its primary goal was to give the students of <a
                href="https://ocasys.rug.nl/2022-2023/catalog/course/WBCS001-05">Advanced Object-Oriented
                Programming</a> some more information on how JUnit operates under the hood.
            </Card.Text>
        </Project>
    );
};

export default BugElProject;
