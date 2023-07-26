import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";
import ProjectImage from "../../assets/images/nitro.webp"

const NitroProject = () => {

    return (
        <Project
            title="NITRO"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "opengl", name: "OpenGL"},
                {id: "bash", name: "Bash"},
                {id: "qt", name: "Qt"},
                {id: "opencv", name: "OpenCV"},
                {id: "cmake", name: "CMake"},
                {id: "docker", name: "Docker"}
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/nitro"
            docs="https://bugelniels.github.io/nitro/">
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
        </Project>
    );
};

export default NitroProject;
