import React from 'react';
import '../styles/index.css';

const SkillsPage = () => {

    const jsonToLines = (list) => {
        return list.map(item => {
            return (
                <p>
                    {item}
                </p>
            )
        })
    }

    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-6">
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                <div className="col-3">
                    <h5>General</h5>
                </div>
            </div>

            <div className="row justify-content-center p-2">
                <div className="col-3">
                    {jsonToLines(
                        [
                            "Excellent Presentation Skills",
                            "Funny guy (I have a certificate)",
                            "Quick learner",
                            "99 runecrafting"
                        ]
                    )}
                </div>
            </div>
            <div className="row justify-content-center p-2">
                <div className="col-3">
                    <h5>Languages</h5>
                </div>
                <div className="col-3">
                    <h5>Frameworks & Tools</h5>
                </div>
                <div className="col-3">
                    <h5>Software</h5>
                </div>
            </div>
            <div className="row justify-content-center p-2">
                <div className="col-3">
                    {jsonToLines(
                        [
                            "C++",
                            "C",
                            "Java",
                            "Javascript",
                            "SQL",
                            "Bash",
                            "Python",
                            "MATLAB"
                        ]
                    )}
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col-6">
                            {jsonToLines(
                                [
                                    "CUDA",
                                    "OpenGL",
                                    "Express.js",
                                    "Node.js",
                                    "REACT",
                                    "OpenMP",
                                    "pthreads",
                                    "MPI",
                                    "Qt",
                                ]
                            )}
                        </div>
                        <div className="col-6">
                            {jsonToLines(
                                [
                                    "Git",
                                    "CMake",
                                    "Make",
                                    "JUnit",
                                    "Maven",
                                    "Docker",
                                    "Kubernetes",
                                    "Linux",
                                ]
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    {jsonToLines(
                        [
                            "Blender",
                            "Da Vinci Resolve",
                            "Adobe Photoshop",
                            "Adobe Premiere Pro",
                            "Adobe After Effects",
                        ]
                    )}
                </div>
            </div>

        </>
    );
};

export default SkillsPage;
