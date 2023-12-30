import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/ccheckmate.webp";

const CCheckmateProject = () => {

    return (
        <ProjectSection
            title="CCheckmate"
            languages={[
                { id: "c", name: "C" }
            ]}
            technologies={[
                { id: "make", name: "Make" },
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/ccheckmate">
            <Card.Text>
                CCheckmate is a simple unit testing framework for C. The main benefit of this framework is its simplicity. It is easy to use, easy to read and does not require any libraries.
                Had a lot of fun with macros on this one.
            </Card.Text>
        </ProjectSection>
    );
};

export { CCheckmateProject };
