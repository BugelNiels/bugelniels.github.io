import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import useJsonData from '../util/useJsonData';
import GitHubIcon from '@mui/icons-material/GitHub';
import Badge from 'react-bootstrap/Badge';
import { openInNewTab } from '../util/newTabOpener';
import '../styles/index.css';

const ProjectsPage = () => {
    const data = useJsonData('data/projects.json');

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
                <Card className="col-md-4 m-4 text-start" key={project.title}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>

                        <Card.Title>{project.title}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className="row" >
                                    <div className="col-md-3">
                                        {project.repository && <Button variant="primary" onClick={() => openInNewTab(project.repository)}><GitHubIcon /> Source</Button>}
                                    </div>
                                    <div className="col-md-9 text-end">
                                        {getToolInfo(project)}
                                    </div>
                                </div>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </ListGroup.Item>
                        </ListGroup>


                    </Card.Body>
                </Card>
            );
        });
    }

    return (
        <>
            <div className="row justify-content-center p-5">
                <div className="col-md-6">
                    <h3>Projects</h3>
                    Below you can find a number of projects that I have worked on in the past few years.
                </div>
            </div>
            <div className="row justify-content-center p-5">
                {data && assembleProjects(data.projects.public)}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* TODO: add logo here */}
                    <h3>University Projects</h3>
                    In my time as a Teaching Assistant at the University of Groningen, I have worked on a significant number of both small and large projects.
                    This ranged from small tasks such as refactoring assignment skeleton code to designing, writing and implementing large course assignments/projects from scratch.
                    The majority of these projects were implemented in C, C++ or Java.
                    Below you can find a very small portion of the projects I did for the university. Due to (hopefully obvious) reasons, the source code for these projects is not public.
                </div>
            </div>
            <div className="row justify-content-center p-5">
                {data && assembleProjects(data.projects.private)}
            </div>
        </>
    );
};

export default ProjectsPage;
