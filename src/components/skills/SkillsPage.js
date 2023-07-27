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
                <div className="col-4 col-lg-3">
                    <img
                        className="w-25"
                        src={CodeIcon}
                        alt="Languages"
                    />
                </div>
                <div className="col-4 col-lg-3">
                    <img
                        className="w-25"
                        src={SettingsIcon}
                        alt="Framework"
                    />
                </div>
                <div className="col-4 col-lg-3">
                    <img
                        className="w-25"
                        src={AppsIcon}
                        alt="Software"
                    />
                </div>
            </div>
            <div className="row justify-content-center pt-2 pb-2 mt-5 mb-5">
                <div className="col-4 col-lg-3">
                    <h4>Languages</h4>
                </div>
                <div className="col-4 col-lg-3">
                    <h4>Frameworks & Tools</h4>
                </div>
                <div className="col-4 col-lg-3">
                    <h4>Software</h4>
                </div>
            </div>
            <div className="row justify-content-center pt-2 pb-2">
                <div className="col-4 col-lg-3">
                    {jsonToLines(
                        [
                            "C",
                            "C++",
                            "Java",
                            "Javascript",
                            "Python",
                            "SQL"
                        ]
                    )}
                </div>
                <div className="col-4 col-lg-3">
                    <div className="row">
                        <div className="col-6">
                            {jsonToLines(
                                [
                                    "CUDA",
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
                                    "Docker",
                                    "Kubernetes",
                                ]
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-4 col-lg-3">
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
        </>
    );
};

export default SkillsPage;