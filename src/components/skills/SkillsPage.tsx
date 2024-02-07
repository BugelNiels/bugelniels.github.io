import React from 'react';
import CodeIcon from '../../images/icons/languages.svg';
import AppsIcon from '../../images/icons/apps.svg';
import SettingsIcon from '../../images/icons/frameworks.svg';

const jsonToLines = (list: string[]) => {
    return list.map(item => {
        return (
            <p>
                {item}
            </p>
        )
    })
}

const SkillsPage = () => {

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
                                    "TypeScript",
                                    "Javascript",
                                    "Python",
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
                                    "OpenGL",
                                    "Pthreads",
                                    "Node.js",
                                    "React",
                                    "Flask",
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
            <div className="row justify-content-center p-5 section-title">
                <hr />
                <div className="col-6" style={{ fontSize: "14px" }}>
                    <p>
                        Slight disclaimer:
                    </p>
                    <p>
                        <i>
                            I do not want to claim to be a full-on expert on all of these, as I am sure you can think of questions I don't know the answer to.
                            However, I have done several projects involving each of these technologies, so I would be comfortable working with them in the future.
                        </i>

                    </p>
                    <p>
                        If it's not on this list, I may still have worked with it, but it has probably been a while :)
                    </p>
                </div>
            </div>
        </>
    );
};


export { SkillsPage };
