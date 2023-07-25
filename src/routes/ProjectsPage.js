import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import useJsonData from '../util/useJsonData';
import GitHubIcon from '@mui/icons-material/GitHub';
import Badge from 'react-bootstrap/Badge';
import { openInNewTab } from '../util/newTabOpener';
import '../styles/index.css';

import data from '../assets/data/projects.json';
import NitroProject from './projects/nitro';

const ProjectsPage = () => {

    const getToolInfo = (project) => {
        return project.tools.map(tool => {
            return (
                <Badge pill className={`m-1 ${tool.toLowerCase()}`} bg="">{tool}</Badge>
            );
        });
    };

    const assembleProjects = (projects) => {
        return projects.map(project => {
            console.log(project)
            return (
                <Card className="col-md-6 m-4" key={project.title}>
                    <Card.Header >
                        <Card.Title>{project.title}</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="text-start" >
                                <Card.Img variant="top" src={project.imageUrl} alt={project.title} style={{ maxHeight: "400px" }} />

                            </ListGroup.Item>
                            <ListGroup.Item className="text-start">
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="row" >
                                    <div className="col-md-3 text-start">
                                        {project.repository && <Button variant="primary" onMouseDown={() => openInNewTab(project.repository)} ><GitHubIcon /> Source</Button>}
                                    </div>
                                    <div className="col-md-9 text-end">
                                        {getToolInfo(project)}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>


                    </Card.Body>
                </Card>
            );
        });
    }

    return (
        <>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Projects</h1>
                    Below you can find a number of projects that I have worked on in the past few years.
                </div>
            </div>
            <div className="row justify-content-center p-2">
                <NitroProject />
            </div>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-md-6 text-start">
                    {/* TODO: add logo here */}
                    <h3>University Projects</h3>
                    In my time as a Teaching Assistant at the University of Groningen, I have worked on a significant number of both small and large projects.
                    This ranged from small tasks such as refactoring assignment skeleton code to designing, writing and implementing large course assignments/projects from scratch.
                    The majority of these projects were implemented in C, C++ or Java.
                    Below you can find a very small portion of the projects I did for the university. Due to (hopefully obvious) reasons, the source code for these projects is not public.
                </div>
            </div>
            <div className="row justify-content-center p-5">
                {/* {data && assembleProjects(data.projects.private)} */}
            </div>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Technologies</h1>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                Cool stuff
            </div>
        </>
    );
};

export default ProjectsPage;
