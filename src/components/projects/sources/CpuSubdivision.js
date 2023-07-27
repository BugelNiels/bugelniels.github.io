import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from "../Project";
import ProjectImage from "../../../images/projects/catmull_subdivision.webp"

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
                {id: "opengl", name: "OpenGL"},
                {id: "qt", name: "QMake"},
            ]}
            image={ProjectImage}
            github="https://github.com/BugelNiels/parallel-cpu-catmull-clark-subdivision">
            <Card.Text>
                An application containing the parallel CPU implementation of the method described in the paper: <a
                href="https://doi.org/10.1111/cgf.14381"> A Halfedge Refinement Rule for Parallel Catmull-Clark
                Subdivision</a>.
            </Card.Text>
        </Project>
    );
};

export default CpuSubdivisionProject;
