import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import useJsonData from '../util/useJsonData';
import Badge from 'react-bootstrap/Badge';
import { openInNewTab } from '../util/newTabOpener';

const ProjectsPage = () => {
    const data = useJsonData('data/projects.json');

    const getToolInfo = (project) => {
        return project.tools.map(tool => {
            return (
                <Badge pill className={`m-1 ${tool}`}>{tool}</Badge>
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
                                    <div className="col-md-2">
                                        {project.repository && <Button variant="primary" onClick={() => openInNewTab(project.repository)}>GitHub</Button>}
                                    </div>
                                    <div className="col-md-10 text-end">
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
                {/* <div className="col-md-12"> */}
                {data && assembleProjects(data.projects.public)}
                {/* </div> */}
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3>University Projects</h3>
                    Here you can find a small portion of the projects I did for the university. However, the source code for these projects are not public.
                </div>
            </div>
            <div className="row justify-content-center p-5">
                {/* <div className="col-md-12"> */}
                {data && assembleProjects(data.projects.private)}
                {/* </div> */}
            </div>
        </>
    );
};

export default ProjectsPage;
