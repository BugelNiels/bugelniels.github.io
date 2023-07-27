import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/stocks.webp"
import ReadMore from "../../ReadMore";

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
                The project/assignment(s) I designed for the course <a
                href="https://ocasys.rug.nl/2022-2023/catalog/course/WBCS001-05">Advanced Object-Oriented
                Programming</a>.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    Throughout the course Advanced Object-Oriented Programming, the students are tasked with building
                    the backend of a stock market simulation. It consists of bots with different trading strategies
                    attempting to trade numerous stocks with each other through a stock market. They are also provided
                    with a front-end written in React, which can be "deployed" in combination with their backend using a
                    provided docker-compose configuration.

                </Card.Text>
                <Card.Text>
                    The main objectives involve implementing a message queue, and using this to build a
                    simulation. They have to split the project into separate modules to enforce good separation of
                    concerns. Code-wise, the main focus is on design (i.e. writing maintainable/extensible/testable
                    code), and writing unit tests. The cool thing is that the nature of the assignment allows for an
                    amazing symphony of design patterns to be used.

                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default StockMarketProject;
