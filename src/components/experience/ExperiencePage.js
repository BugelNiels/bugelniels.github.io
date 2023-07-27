import React from 'react';
import {ListGroupItem, Nav} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ReadMoreText from "../ReadMore";
import Experience from "./Experience";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "gatsby";


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
                    <a className="education-link"
                       href={"https://ocasys.rug.nl/" + year + "/catalog/course/" + courseCode} target="_blank"
                       rel="noopener noreferrer">{courseCode}</a>
                </div>

            </div>
        </ListGroupItem>
    }

    return (
        <>
            <div className="row justify-content-center pb-5 pt-5 section-title">
                <div className="col-12">
                    <h1>Work Experience</h1>
                </div>
            </div>
            <Experience time="Feb 2019 - Jul 2023"
                        title="Teaching Assistant"
                        employer="University of groningen"
                        employerLink="https://www.rug.nl/">
                <p>
                    Teaching Assistant (TA) for a large number of courses within the Computing Science programme.
                </p>
                <ReadMoreText>
                    <p>

                        <ul>
                            <li>Designed course material, such as readers, assignments, frameworks, and tutorials.</li>
                            <li>Gave lectures, tutorials, presentations, and lab sessions.</li>
                            <li>Created schedules, grading schema and course pages.</li>
                            <li>Coordinated TAs.</li>
                            <li>Also did my fair share of grading.</li>
                        </ul>

                        Throughout my time at the University of Groningen, my primary focus was arguably more on the
                        Teaching Assistant jobs than on studying. In particular, I have been the coordinator for
                        Object-Oriented Programming and Advanced Object-Oriented Programming. For these courses, I wrote
                        two separate readers (~80-page booklets containing the majority of the course material) in
                        collaboration with two other TAs, designed and implemented new assignments, introduced tutorials
                        in the form of live-coding sessions, created grading schemes, course schedules, lead meetings
                        and coordinated the TA teams (upwards of 30 TAs at a time). I basically handled everything apart
                        from the lecture content.
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
                </ReadMoreText>


            </Experience>

            <Experience time="Oct 2019 - Jul 2023"
                        title="Numerus Fixus Coordinator CS"
                        employer="University of groningen"
                        employerLink="https://www.rug.nl/">
                <p>
                    Coordinator of the Numerus Fixus procedure for Computing Science.
                </p>
                <ReadMoreText>
                    <ul>
                        <li>Designed and wrote the selection tests.</li>
                        <li>Organised an on-site training day and an on-site selection test.</li>
                        <li>Gave webinar presentations.</li>
                        <li>Coordinated a team of TAs during the evaluation process.</li>
                    </ul>
                    In my time here, I introduced numerous ways of streamlining and automating the process, with one of
                    the main contributions being MATIG.
                    Before the Numerus Fixus was introduced in 2020, this process was called Matching.
                </ReadMoreText>
            </Experience>
            <Experience time="Oct 2020 - Jul 2022"
                        title="Full Stack Web Developer MATIG"
                        employer="University of groningen"
                        employerLink="https://www.rug.nl/">
                <p>
                    Designed, built, and maintained MATIG: a system that simplifies the organisation and improves
                    the efficiency of the matching procedure for several studies at the Faculty of Science and
                    Engineering.
                </p>
                <ReadMoreText>
                    MATIG was built using Express.js, React, MongoDB, and Redis. It was deployed on the university servers using
                    Kubernetes.
                    See the <Link offset={-70} as={ScrollLink} to="#matig" smooth={true}> MATIG</Link> project.
                </ReadMoreText>
            </Experience>
            <Experience time="Apr 2021 - Oct 2021"
                        title="Web Developer Themis"
                        employer="University of groningen"
                        employerLink="https://www.rug.nl/">
                <p>
                    Laid the groundwork for a plagiarism scanning and reporting feature in the university's online
                    grading system <a href="https://themis.housing.rug.nl/" target="_blank" rel="noopener noreferrer">Themis</a>.
                </p>
            </Experience>
            <Experience time="Aug 2019 - Jan 2020"
                        title="Student Mentor"
                        employer="University of groningen"
                        employerLink="https://www.rug.nl/">
                <p>
                    Mentored a group of first-year Computing Science Bachelor students to provide
                    guidance w.r.t. studying and university life.
                </p>
            </Experience>
        </>
    );
};

export default ExperiencePage;
