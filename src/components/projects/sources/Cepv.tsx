import React from 'react';
import Card from 'react-bootstrap/Card';
import { ProjectSection } from "../ProjectSection";
import ProjectImage from "../../../images/projects/cepv.webp";
import { ReadMoreText } from "../../ReadMore";

const CepvProject = () => {

    return (
        <ProjectSection
            title="Cern Collision Event Visualizer"
            languages={[
                { id: "typescript", name: "Typescript" },
                { id: "python", name: "Python" }
            ]}
            technologies={[
                { id: "react", name: "React" },
                { id: "flask", name: "Flask" },
                { id: "threejs", name: "Three.js" },
                { id: "redis", name: "Redis" },
                { id: "docker", name: "Docker" },
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/cepv">
            <Card.Text>
            This website contains a simple visualization of events observed at the Compact Muon Solenoid (CMS) detector at CERN. 
            For some time I wanted to a project with some sort of visualization component (perhaps WebGl based). 
            When I found out that CERN has a ton of data publically available, that sparked my curiosity (naturally). 
            As such, I decided to build this web application to visualize these collision events (because that must look pretty cool).
            </Card.Text>
            <ReadMoreText>
                <Card.Text>
                    Before you ask "but isn't there already an event display for this data", the answer is yes. 
                    When I got the idea for the project I did not know that though, and I thought it would be still be a fun project to do. 
                    Additionally, it is always nice to learn a bit about how these things work.

                </Card.Text>
                <Card.Text>

                    The website uses the CERN Open Data API to retrieve the displayable records. 
                    The visualization itself only displays the CMS detector itself and the tracks produced by the collision event. 
                    The project is still under development, so more feature might be added in the future.
                </Card.Text>
            </ReadMoreText>
        </ProjectSection>
    );
};

export { CepvProject };
