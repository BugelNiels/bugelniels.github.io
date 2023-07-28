import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from "react-bootstrap/Badge";
import GitHubIcon from "../icons/GitHubIcon";
import DocsIcon from "../icons/DocsIcon";


const Project = (props) => {

    const getLanguageBadge = (technologies) => {
        return technologies.map(tech => {
            return (
                <Badge pill key={tech.id} className={`m-1 p-2 ${tech.id}`} bg="">
                    {tech.name}
                </Badge>
            );
        });
    };

    const getTechBadge = (technologies) => {
        return technologies.map(tech => {
            return (
                <Badge pill key={tech.id} className={`m-1 p-2`}>
                    {tech.name}
                </Badge>
            );
        });
    };

    return (
        <Card className="p-0 mb-4">
            <Card.Header>

                <div className="row justify-content-center">
                    <div className="col-8 text-start">
                        <Card.Title>{props.title}</Card.Title>
                    </div>
                    <div className="col-4 text-end">
                        {props.docs &&
                            <a href={props.docs} target="_blank" rel="noopener noreferrer"
                               className="clickable-link me-3" style={{fontSize: "larger"}}>
                                <DocsIcon className="footer-icon"/>
                            </a>
                        }
                        {props.github &&
                            <a href={props.github} target="_blank" rel="noopener noreferrer"
                               className="clickable-link me-3">
                                <GitHubIcon className="footer-icon"/>
                            </a>
                        }
                    </div>

                </div>

            </Card.Header>

            <Card.Body>
                <ListGroup variant="flush">
                    {props.image &&
                        <ListGroup.Item className="text-start">
                            <Card.Img variant="top"
                                      src={props.image}
                                      alt={props.title}
                                      style={{maxHeight: "512px", borderRadius: "20px"}}/>
                        </ListGroup.Item>}
                    <ListGroup.Item className="text-start">
                        {props.children}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            <div className="col-2 text-start">
                                {getLanguageBadge(props.languages)}
                            </div>

                            <div className="col-10 text-end">
                                {getTechBadge(props.technologies)}
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Project;
