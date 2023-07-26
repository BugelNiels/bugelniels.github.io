import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../../components/Project";

const GpuConvolutionProject = () => {

    return (
        <Project
            title="Distributed GPU Convolution"
            languages={[
                {id: "c", name: "C"}
            ]}
            technologies={[
                {id: "cuda", name: "CUDA"},
                {id: "mpi", name: "MPI"},
                {id: "pthreads", name: "pthreads"}
            ]}
            github="https://github.com/BugelNiels/distributed-gpu-convolution">
            <Card.Text>
                A GPU implementation of generalized convolution operators. The framework is designed for large image data sets and can run in a distributed system.
            </Card.Text>
        </Project>
    );
};

export default GpuConvolutionProject;
