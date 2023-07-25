import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import {openInNewTab} from '../../util/newTabOpener';
import Badge from "react-bootstrap/Badge";


const NitroProject = () => {

    return (<>
        <Card className="col-lg-6 col-md-8 col-sm-10 m-2 p-0">
            <Card.Header>
                <Card.Title>NITRO</Card.Title>
            </Card.Header>

            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item className="text-start">
                        <Card.Img variant="top"
                                  src="https://raw.githubusercontent.com/BugelNiels/nitro/main/docs/screenshots/front.png"
                                  alt="NITRO" style={{maxHeight: "400px"}}/>

                    </ListGroup.Item>
                    <ListGroup.Item className="text-start">
                        <Card.Text>
                            NITRO is a powerful tool for building complex image processing routines. Instead of
                            needing to modify source code or scripts to process images in different ways, you can
                            use this visual node editor to do that instead. The project was developed with
                            extendability in mind, making it easy to add your own types nodes, and widgets. For more
                            information on this, read the docs. The UI was inspired by Blender's Shader Editor.
                        </Card.Text>
                        <Card.Text>
                            The project was originally developed for my Master thesis at the University of
                            Groningen. That is also the origin of the name NITRO: Niels' Image-processing Thesis on
                            Reconstruction Operations.
                        </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <Button className="github"
                                        onMouseDown={() => openInNewTab("https://github.com/BugelNiels/nitro")}>
                                    <GitHubIcon style={{ marginRight: '8px' }}/>
                                    Source
                                </Button>
                            </div>
                            <div className="col-2">
                                <Button variant="primary"
                                        onMouseDown={() => openInNewTab("https://bugelniels.github.io/nitro/")}>
                                    <DescriptionIcon style={{ marginRight: '8px' }} />
                                    Docs
                                </Button>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <b>Languages:</b>
                                <Badge pill className={`m-1 cpp`}>C++</Badge>
                                <Badge pill className={`m-1 glsl`}>GLSL</Badge>
                                <Badge pill className={`m-1 bash`}>Bash</Badge>
                            </div>

                            <div className="col-4">
                                <b>Technologies:</b>
                                <Badge pill className={`m-1 Qt`}>Qt</Badge>
                                <Badge pill className={`m-1 Qt`}>OpenCV</Badge>
                            </div>

                            <div className="col-4">
                                <b>Build:</b>
                                <Badge pill className={`m-1 cmake`}>CMake</Badge>
                                <Badge pill className={`m-1 docker`}>Docker</Badge>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>


            </Card.Body>
        </Card>
    </>);
};

export default NitroProject;
