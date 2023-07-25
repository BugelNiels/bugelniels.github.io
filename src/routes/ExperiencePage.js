import React from 'react';
import {Link} from "react-router-dom";
import {ListGroupItem} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ReadMoreText from "../components/ReadMore";


const ExperiencePage = () => {

    const course = (name, times, special, courseCode, year = "current") => {
        return <ListGroupItem>
            <div className="row">

                <div className="col-6">
                    {name}
                </div>
                <div className="col-2">
                    {times && times + "x"}
                </div>
                <div className="col-2">
                    {special}
                </div>
                <div className="col-2 text-end">
                    <Link className="education-link"
                          to={"https://ocasys.rug.nl/" + year + "/catalog/course/" + courseCode} target="_blank"
                          rel="noopener noreferrer">{courseCode}</Link>
                </div>

            </div>
        </ListGroupItem>
    }

    return (
        <>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Work Experience</h1>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Feb 2019 - Jul 2023
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Teaching Assistant</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to="https://www.rug.nl/" target="_blank"
                                      rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        Teaching Assistant for the following courses.

                        <ReadMoreText>
                            OOP is my baby
                        </ReadMoreText>

                    </p>
                    <p>
                        <h5>Bachelor Courses:</h5>
                        <ListGroup>
                            {course("Object-Oriented Programming", 5, "Coordinator", "WBCS028-05", "2022-2023")}
                            {course("Advanced Object-Oriented Programming", 4, "Coordinator", "WBCS001-05", "2022-2023")}
                            {course("Algorithms and Data Structures in C for AI", 2, "", "WPAI18002", "2018-2019")}
                            {course("Advanced Algorithms and Data Structures", 2, "Head TA", "WBCS009-05", "2020-2021")}
                            {course("Parallel Computing", 2, "Head TA", "WBCS029-05", "2022-2023")}
                            {course("Signals and Systems", 2, "", "WBCS042-05", "2021-2022")}
                            {course("Computer Graphics", "", "Head TA", "WBCS019-05", "2022-2023")}
                            {course("Operating Systems", "", "", "WBCS023-05", "2022-2023")}
                        </ListGroup>
                    </p>
                    <p>
                        <h5>Master Courses:</h5>

                        <ListGroup>
                            {course("Image Processing", 2, "Head TA", "WMCS008-05", "2022-2023")}
                            {course("Advanced Computer Graphics", "", "Head TA", "WMCS006-05", "2022-2023")}
                            {course("Advanced Parallel Programming", "", "Coordinator", "WMCS020-05", "2022-2023")}
                        </ListGroup>
                    </p>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Oct 2019 - Jul 2023
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Numerus Fixus Coordinator CS</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to="https://www.rug.nl/" target="_blank"
                                      rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        Coordinator of the Numerus Fixus procedure for Computing Science. Also involved in streamlining
                        the Numerus Fixus process on a faculty level.
                        Before this, this was called the matching process. TODO.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Oct 2020 - Jul 2022
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Full Stack Web Developer MATIG</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to="https://www.rug.nl/" target="_blank"
                                      rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        Designed, built, and maintained MATIG: a system that simplifies the organisation and improves
                        the efficiency of the matching procedure for several studies at the Faculty of Science and
                        Engineering.
                        MATIG was built using MongoDB, Express, React, NodeJS, Redis, and Kubernetes.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Apr 2021 - Oct 2021
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Web Developer Themis</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to="https://www.rug.nl/" target="_blank"
                                      rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        Responsible for adding a plagiarism scanning and reporting feature to the online grading system
                        Themis.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Aug 2019 - Jan 2020
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Student Mentor</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to="https://www.rug.nl/" target="_blank"
                                      rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        Responsible for mentoring a group of first year Computing Science Bachelor students to provide
                        guidance w.r.t. studying and university life.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ExperiencePage;