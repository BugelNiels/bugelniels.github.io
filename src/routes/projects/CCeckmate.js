import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const CCheckmateProject = () => {

    return (
        <Project
            title="CCheckmate"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
                {id: "make", name: "Make"},
            ]}
            github="https://github.com/BugelNiels/ccheckmate">
            <Card.Text>
                CCheckmate is a simple unit testing framework for C. The main benefit of this framework is its simplicity. It is easy to use, easy to read and does not require any libraries.
            </Card.Text>
        </Project>
    );
};

export default CCheckmateProject;
