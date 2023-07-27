import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/nitro.webp"
import ReadMore from "../../ReadMore";

const NitroProject = () => {

    return (
        <Project
            title="NITRO"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"},
                {id: "opencv", name: "OpenCV"},
                {id: "cmake", name: "CMake"},
                {id: "docker", name: "Docker"},
                {id: "bash", name: "Bash"},
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/nitro"
            docs="https://bugelniels.github.io/nitro/">
            <Card.Text>
                NITRO is a powerful tool for building complex image-processing routines in a non-destructive manner. The
                project was developed and designed with extensibility in mind, which means that it is easy to define custom nodes,
                data types, or even custom GUI widgets.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    At its core, NITRO is a visual node editor, meaning that the user can construct a custom graph of
                    nodes to create their own pipeline. When building a new image processing pipeline, one often uses
                    existing building blocks. This is where NITRO shines: it comes with a large collection of these
                    building blocks in the form of nodes, ranging from simple transform and blend operations to more
                    complex filters or frequency domain transforms.
                </Card.Text>
                <Card.Text>
                    NITRO was built using C++, Qt, CMake, and OpenGL. It uses OpenCV as the backbone for its image
                    representation and the QtNodes library to do the heavy lifting of the visual graph representation.
                    However, a significant number of changes to this library were required in order to get the desired
                    qualities. As such, I created a custom fork containing these numerous modifications. The GUI of
                    NITRO was inspired by Blender’s Shader Editor given its user-friendliness and flexibility.
                </Card.Text>
                <Card.Text>
                    The project was originally developed for my Master's thesis at the University of
                    Groningen. That is also the origin of the name NITRO: Niels' Image-processing Thesis on
                    Reconstruction Operations.
                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default NitroProject;
