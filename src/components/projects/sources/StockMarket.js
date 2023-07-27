import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/stocks.webp"

const StockMarketProject = () => {

    return (
        <Project
            title="Stock Market Simulation"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "maven", name: "Maven"},
                {id: "react", name: "React"},
                {id: "junit", name: "JUnit"},
                {id: "mockito", name: "Mockito"},
                {id: "docker", name: "Docker"},
                {id: "tcp", name: "TCP"}
            ]}
            image={ProjectImage}>
            <Card.Text>

            </Card.Text>
        </Project>
    );
};

export default StockMarketProject;
