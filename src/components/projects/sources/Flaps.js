import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/flaps.webp"
import ReadMore from "../../ReadMore";

const FlapsProject = () => {

    return (
        <Project
            title="FLAPS"
            languages={[
                {id: "java", name: "Java"}
            ]}
            technologies={[
                {id: "maven", name: "Maven"}
            ]}
            image={ProjectImage}>
            <Card.Text>
                A final assignment I designed in collaboration with another TA for the course&nbsp;
                <a href="https://ocasys.rug.nl/2020-2021/catalog/course/WBCS028-05" target="_blank"
                   rel="noopener noreferrer">Object-Oriented Programming</a>.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    FLAPS (Flight Logistics Aviation Planning Simulation) was the final assignment designed for the
                    course Object-Oriented Programming. It consists of a base framework given to the students with
                    numerous features such as support for different aircraft, airports, cargo types and fuel. This was
                    all configurable using JSON files. The airports could be added by adding their real-world
                    coordinates, which the program projects on the map. The assignment was to extend
                    this base framework with an editor that allows the user to add fuel, cargo, passengers etc. in such
                    a way that the plane can fly to its destination.
                </Card.Text>
            </ReadMore>


        </Project>
    );
};

export default FlapsProject;
