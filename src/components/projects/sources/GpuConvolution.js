import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/convolution.png";
import ReadMore from "../../ReadMore";

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
                {id: "pthreads", name: "pthreads"},
                {id: "make", name: "Make"},
                {id: "bash", name: "Bash"},
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/distributed-gpu-convolution">
            <Card.Text>
                A GPU implementation of generalized convolution operators using CUDA. The framework is designed to work
                for large image data sets and can run in a distributed system.
            </Card.Text>
            <ReadMore>
                <Card.Text>
                    The framework uses numerous parallelization techniques to attain high performance. First, it makes
                    use of MPI to ensure the image data set can be distributed between various nodes.
                    On each node, the images are processed on the GPU using CUDA.
                </Card.Text>

                <Card.Text>
                    As the framework is designed for large
                    image data sets, IO is a major bottleneck. To ensure good performance here, it uses a
                    producer-consumer structure where a number of threads are continuously saving and loading images,
                    while another thread is responsible for enqueuing GPU tasks. It uses a buffer stack to ensure the
                    host and device memory for the images does not have to continuously be reallocated.
                    This entire pipeline is explained in the README of the repository.
                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default GpuConvolutionProject;
