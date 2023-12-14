import React from 'react';
import CodeIcon from '../../images/icons/languages.svg';
import AppsIcon from '../../images/icons/apps.svg';
import SettingsIcon from '../../images/icons/frameworks.svg';

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
            <div className="col-12">
                <h1>Skills</h1>
            </div>
        </div>

        <div className="row justify-content-center pt-2 pb-2">
            <div className="col-6 col-lg-3 order-0 order-lg-0">
                <div className="row justify-content-center pt-2 pb-2">
                    <img
                        className="col-4 col-lg-3 p-3 pb-5"
                        src={CodeIcon}
                        alt="Languages"
                    />
                    <h4>Languages</h4>
                </div>
                <div className="row justify-content-center pt-2 pb-2">
                    <div className="row justify-content-center pt-2 pb-2">
                        {jsonToLines(
                            [
                                "C",
                                "C++",
                                "Java",
                                "Javascript",
                                "MATLAB",
                                "Python",
                                "SQL"
                            ]
                        )}
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3 order-2 order-lg-1">
                <div className="row justify-content-center pt-2 pb-2">
                    <img
                        className="col-2 col-lg-3 p-3 pb-5"
                        src={SettingsIcon}
                        alt="Framework"
                    />
                    <h4>Frameworks & Tools</h4>
                </div>

                <div className="row justify-content-center pt-2 pb-2">
                    <div className="col-6">
                        {jsonToLines(
                            [
                                "CUDA",
                                "GLSL",
                                "OpenGL",
                                "Pthreads",
                                "MPI",
                                "Node.js",
                                "React",
                                "Qt",
                            ]
                        )}
                    </div>
                    <div className="col-6">
                        {jsonToLines(
                            [
                                "Git",
                                "CMake",
                                "JUnit",
                                "Maven",
                                "Mockito",
                                "Kubernetes",
                                "Docker",
                                "CI/CD"
                            ]
                        )}
                    </div>
                </div>
            </div>
            <div className="col-6 col-lg-3 order-1 order-lg-2">
                <div className="row justify-content-center pt-2 pb-2">
                    <img
                        className="col-4 col-lg-3 p-3 pb-5"
                        src={AppsIcon}
                        alt="Software"
                    />
                    <h4>Software</h4>
                </div>

                <div className="row justify-content-center pt-2 pb-2">
                    {jsonToLines(
                        [
                            "Blender",
                            "Da Vinci Resolve",
                            "Adobe Photoshop",
                            "Adobe Premiere Pro",
                            "Adobe After Effects",
                            "Google Search"
                        ]
                    )}
                </div>
            </div>
        </div>
</>
)
    ;
};


export default SkillsPage;
