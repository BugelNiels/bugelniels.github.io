import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/gpu_subdivision.png";
import ReadMore from "../../ReadMore";

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
            image={ProjectImage}
            github="https://github.com/BugelNiels/parallel-gpu-catmull-clark-subdivision">
            <Card.Text>
                A command line tool to subdivide meshes using a CUDA implementation of the method described in the
                paper:&nbsp;
                <a href="https://doi.org/10.1111/cgf.14381" target="_blank" rel="noopener noreferrer">
                    A Halfedge Refinement Rule for Parallel Catmull-Clark Subdivision</a>.
            </Card.Text>

            <ReadMore>
                <Card.Text>
                    The original paper describes and tests the performance on the GPU using compute shaders. This
                    project contains a CUDA implementation, as this allows for greater potential performance
                    improvements due to the flexibility of CUDA. The framework allows for the loading, refining and
                    saving of meshes. In addition to quad meshes, it also has support for non-quad meshes and meshes
                    with boundary loops. The framework is a commandline only tool, but could easily be integrated into
                    existing software.
                </Card.Text>
            </ReadMore>
        </Project>
    );
};

export default GpuSubdivisionProject;
