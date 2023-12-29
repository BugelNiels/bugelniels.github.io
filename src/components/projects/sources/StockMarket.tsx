import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/stocks.webp";
import { ReadMoreText } from "../../ReadMore";

const StockMarketProject = () => {

    return (
        <ProjectSection
            title="Stock Market Simulation"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "junit", name: "JUnit"},
                {id: "mockito", name: "Mockito"},
                {id: "maven", name: "Maven"},
                {id: "react", name: "React"},
                {id: "docker", name: "Docker"}
            ]}
            image={ProjectImage}>
            <Card.Text>
                The project/assignment(s) I designed for the course&nbsp;
                <a href="https://ocasys.rug.nl/2022-2023/catalog/course/WBCS001-05" target="_blank"
                   rel="noopener noreferrer">Advanced Object-Oriented Programming</a>.
            </Card.Text>
            <ReadMoreText>
                <Card.Text>
                    Throughout the course Advanced Object-Oriented Programming, the students are tasked with building
                    the backend of a stock market simulation. It consists of bots with different trading strategies
                    attempting to trade numerous stocks with each other through a stock market. They are also provided
                    with a front-end written in React, which can be "deployed" in combination with their backend using a
                    provided docker-compose configuration.

                </Card.Text>
                <Card.Text>
                    The main objectives involve implementing a networked message queue and using this to build a
                    simulation. They have to split the project into separate modules to enforce good separation of
                    concerns. Code-wise, the main focus is on design (i.e. writing maintainable/extensible/testable
                    code), and writing unit tests. The cool thing is that the nature of the assignment allows for an
                    amazing symphony of design patterns to be used.
                </Card.Text>
            </ReadMoreText>
        </ProjectSection>
    );
};

export { StockMarketProject };
