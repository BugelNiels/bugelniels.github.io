import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import {openInNewTab} from '../util/newTabOpener';
import Badge from "react-bootstrap/Badge";


const Project = (props) => {


    const getTechBadge = (id, name) => {
        return (
            <Badge pill className={`m-1 ${id}`} bg="">
                {name}
            </Badge>
        );
    };

    return (
        <Card className="m-2 p-0">
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
            </Card.Header>

            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-start">
                        <Card.Img variant="top"
                                  src={props.image}
                                  alt={props.title}
                                  style={{maxHeight: "400px"}}/>

                    </ListGroup.Item>
                    <ListGroup.Item className="text-start">
                        {props.children}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            {props.github &&
                                <div className="col-2 col-sm-4">
                                    <Button className="github"
                                            onMouseDown={() => openInNewTab(props.github)}>
                                        <GitHubIcon style={{marginRight: '8px'}}/>
                                        Source
                                    </Button>
                                </div>
                            }
                            {props.docs &&
                                <div className="col-2 col-sm-4">
                                    <Button variant="primary"
                                            onMouseDown={() => openInNewTab(props.docs)}>
                                        <DescriptionIcon style={{marginRight: '8px'}}/>
                                        Docs
                                    </Button>
                                </div>
                            }
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <b>Languages:</b>
                                {getTechBadge("cpp", "C++")}
                                {getTechBadge("glsl", "GLSL")}
                                {getTechBadge("bash", "Bash")}
                            </div>

                            <div className="col-4">
                                <b>Technologies:</b>
                                {getTechBadge("qt", "Qt")}
                                {getTechBadge("opencv", "OpenCV")}
                            </div>

                            <div className="col-4">
                                <b>Build:</b>
                                {getTechBadge("cmake", "CMake")}
                                {getTechBadge("docker", "Docker")}
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Project;
