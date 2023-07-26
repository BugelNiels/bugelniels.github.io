import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const GpuSubdivisionProject = () => {

    return (
        <Project
            title="GPU Catmull-Clark Subdivision"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
                {id: "cuda", name: "CUDA"},
                {id: "make", name: "Make"}
            ]}
            github="https://github.com/BugelNiels/parallel-gpu-catmull-clark-subdivision">
            <Card.Text>
                This project is a CUDA implementation of the method described in the paper: A Halfedge Refinement Rule for Parallel Catmull-Clark Subdivision. It also has a number of optimizations to accelerate it even further.
            </Card.Text>
        </Project>
    );
};

export default GpuSubdivisionProject;
