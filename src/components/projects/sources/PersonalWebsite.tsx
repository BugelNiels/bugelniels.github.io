import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/mirror.webp";

const PersonalWebsiteProject = () => {

    return (
        <ProjectSection
            title="Personal Website"
            languages={[
                {id: "typescript", name: "TypeScript"}
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
        </ProjectSection>
    );
};

export { PersonalWebsiteProject };
