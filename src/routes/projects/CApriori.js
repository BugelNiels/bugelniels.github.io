import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const CAprioriProject = () => {

    return (
        <Project
            title="C-Apriori"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
            ]}
            image="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
            github="https://github.com/BugelNiels/c-apriori">
            <Card.Text>
                A fast C implementation of the Apriori algorithm.
            </Card.Text>
        </Project>
    );
};

export default CAprioriProject;
