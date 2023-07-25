import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const MatigProject = () => {

    return (
        <Project
            title="MATIG"
            languages={[
                {id: "javascript", name: "Javascript"}
            ]}
            technologies={[
                {id: "react", name: "React"},
                {id: "express", name: "ExpressJs"},
                {id: "mongodb", name: "MongoDB"},
                {id: "redis", name: "Redis"},
                {id: "kubernetes", name: "Kubernetes"}
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png">
            <Card.Text>
                Designed, built, and maintained MATIG: a system that simplifies the organisation and improves the efficiency of the matching procedure for several studies at the Faculty of Science and Engineering.
            </Card.Text>
        </Project>
    );
};

export default MatigProject;
