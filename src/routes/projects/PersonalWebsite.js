import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const PersonalWebsiteProject = () => {

    return (
        <Project
            title="Personal Website"
            languages={[
                {id: "javascript", name: "Javascript"}
            ]}
            technologies={[
                {id: "react", name: "React"}
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
            github="https://github.com/BugelNiels/bugelniels.github.io">
            <Card.Text>
                The website you are looking at right now :)
            </Card.Text>
        </Project>
    );
};

export default PersonalWebsiteProject;
