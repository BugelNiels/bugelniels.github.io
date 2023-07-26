import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import {openInNewTab} from '../util/newTabOpener';
import Badge from "react-bootstrap/Badge";


const Project = (props) => {

    const getTechBadge = (technologies) => {
        return technologies.map(tech => {
            return (
                <Badge pill key={tech.id} className={`m-1`}>
                    {tech.name}
                </Badge>
            );
        });
    };

    return (
        <Card className="m-2 p-0">
            <Card.Header>

                <div className="row justify-content-center">
                    <div className="col-8 text-start">
                        <Card.Title>{props.title}</Card.Title>
                    </div>
                    <div className="col-4 text-end">
                        {props.github &&
                            <GitHubIcon
                                className="clickable-icon"
                                onMouseDown={() => openInNewTab(props.github)}
                            />
                        }
                    </div>

                </div>

            </Card.Header>

            <Card.Body>
                <ListGroup variant="flush">
                    {props.image && <ListGroup.Item className="text-start">
                        <Card.Img variant="top"
                                  src={props.image}
                                  alt={props.title}
                                  style={{maxHeight: "512px", borderRadius: "10px"}}/>

                    </ListGroup.Item>}
                    <ListGroup.Item className="text-start">
                        {props.children}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            <div className="col-2 text-start">
                                {getTechBadge(props.languages)}
                            </div>

                            <div className="col-10 text-end">
                                {getTechBadge(props.technologies)}
                            </div>
                        </div>
                    </ListGroup.Item>
                    {/*<ListGroup.Item>*/}
                    {/*    <div className="row ">*/}
                    {/*        <div className="col-12">*/}
                    {/*            {props.github &&*/}
                    {/*                <Button className="github m-2"*/}
                    {/*                        onMouseDown={() => openInNewTab(props.github)}>*/}
                    {/*                    <GitHubIcon style={{marginRight: '8px'}}/>*/}
                    {/*                    Source*/}
                    {/*                </Button>*/}
                    {/*            }*/}
                    {/*            {props.docs &&*/}
                    {/*                <Button variant="primary m-2"*/}
                    {/*                        onMouseDown={() => openInNewTab(props.docs)}>*/}
                    {/*                    <DescriptionIcon style={{marginRight: '8px'}}/>*/}
                    {/*                    Docs*/}
                    {/*                </Button>*/}
                    {/*            }*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</ListGroup.Item>*/}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Project;
