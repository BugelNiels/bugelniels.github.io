import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const CpuSubdivisionProject = () => {

    return (
        <Project
            title="CPU Catmull-Clark Subdivision"
            languages={[
                {id: "cpp", name: "C++"}
            ]}
            technologies={[
                {id: "openmp", name: "OpenMP"},
                {id: "qt", name: "Qt"},
                {id: "opengl", name: "OpenGL"}
            ]}
            image="https://github.com/BugelNiels/parallel-cpu-catmull-clark-subdivision/raw/main/screenshots/obj_wireframe.png"
            github="https://github.com/BugelNiels/parallel-cpu-catmull-clark-subdivision">
            <Card.Text>
                This framework contains the parallel CPU implementation of the method described in the paper: A Halfedge Refinement Rule for Parallel Catmull-Clark Subdivision.
            </Card.Text>
        </Project>
    );
};

export default CpuSubdivisionProject;
