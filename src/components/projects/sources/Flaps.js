import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/flaps.webp"

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
                FLAPS (Flight Logistics Aviation Planning Simulation) was the final assignment designed for the course Object-Oriented Programming.

                Numerous cool features such as the aircraft, airports, cargo and fuel all being configurable using JSON files. The airports could be added by adding its real world coordinates, which the program translates into a position on the map.
                The assignment was to extend this base framework with an editor that allows the user to add fuel, cargo, passengers etc. in such a way that the plane can fly to its destination.
            </Card.Text>
        </Project>
    );
};

export default FlapsProject;
