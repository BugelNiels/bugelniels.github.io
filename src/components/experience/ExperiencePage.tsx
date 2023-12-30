import React from 'react';
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { ReadMoreText } from "../ReadMore";
import { ExperienceSection } from "./ExperienceSection";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const course = (name: string, times: number, special: string, courseCode: string, year: string = "current") => {
    return <ListGroupItem>
        <div className="row">
            <div className="col-1">
                {times > 1 && times + "x"}
            </div>
            <div className="col-4">
                {name}
            </div>
            <div className="col-3 text-center">
                {special}
            </div>
            <div className="col-4 text-end">
                <a className="education-link"
                    href={"https://ocasys.rug.nl/" + year + "/catalog/course/" + courseCode} target="_blank"
                    rel="noopener noreferrer">{courseCode}</a>
            </div>
        </div>
    </ListGroupItem>
}

const ExperiencePage = () => {

    return (<>
        <div className="row justify-content-center pb-5 pt-5 section-title">
            <div className="col-12">
                <h1>Work Experience</h1>
            </div>
        </div>
        <ExperienceSection
            time="Feb 2019 - Jul 2023"
            title="Teaching Assistant"
            employer="University of groningen"
            employerLink="https://www.rug.nl/">
            <p>
                Teaching Assistant (TA) for a large number of courses within the Computing Science programme.
            </p>
            <ReadMoreText>
                <p>

                    <ul>
                        <li>Designed course material such as readers, assignments, frameworks, and tutorials.</li>
                        <li>Gave lectures, tutorials, presentations, and lab sessions for groups of up to 150
                            students.
                        </li>
                        <li>Created schedules, grading schema and course pages.</li>
                        <li>Coordinated courses consisting of over 300 students and managed teams of up to 30 Teaching
                            Assistants.
                        </li>
                    </ul>

                    For the past three years before I finished my master's, I was the coordinator for
                    <i> Object-Oriented Programming </i>and<i> Advanced Object-Oriented Programming </i>for a few years.
                    For these
                    courses, I wrote two separate readers (~80-page booklets containing the majority of the course
                    material) in collaboration with two other TAs, designed and implemented new assignments,
                    introduced tutorials in the form of live-coding sessions, created grading schemes, course
                    schedules, lead meetings and coordinated the TA teams (upwards of 30 TAs at a time).
                </p>
                <p>
                    I played a major part in numerous improvements of the CS study programme in Groningen. My
                    involvement as a TA in the courses<i> Advanced Object-Oriented Programming </i>and<i> Advanced
                        Algorithms & Data Structures </i>caused their course evaluations to go from one of the lowest grades
                    to the highest grade possible. For the remainder of the courses, I implemented numerous
                    improvements, such as rewriting assignments where necessary to better align with the course
                    objectives, providing well-structured information and materials to the students and TAs, and
                    enforcing stricter code style standards (via e.g. a CI/CD pipeline containing <a
                        href="https://checkstyle.sourceforge.io/" target="_blank"
                        rel="noopener noreferrer">CheckStyle</a>).
                    The courses I was involved in were all consistently rated well with good grades in the course
                    evaluations.
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
                        {course("Computer Graphics", 1, "Head TA", "WBCS019-05", "2022-2023")}
                        {course("Operating Systems", 1, "", "WBCS023-05", "2022-2023")}
                    </ListGroup>
                </p>
                <p>
                    <h5>Master Courses:</h5>

                    <ListGroup>
                        {course("Image Processing", 2, "Head TA", "WMCS008-05", "2022-2023")}
                        {course("Advanced Computer Graphics", 1, "Head TA", "WMCS006-05", "2022-2023")}
                        {course("Advanced Parallel Programming", 1, "Coordinator", "WMCS020-05", "2022-2023")}
                    </ListGroup>
                </p>
            </ReadMoreText>


        </ExperienceSection>

        <ExperienceSection
            time="Oct 2019 - Jul 2023"
            title="Numerus Fixus Coordinator CS"
            employer="University of groningen"
            employerLink="https://www.rug.nl/">
            <p>
                Coordinator of the Numerus Fixus procedure for Computing Science. Over 400 students take part in this
                procedure every year.
            </p>
            <ReadMoreText>
                <ul>
                    <li>Designed and wrote the selection tests.</li>
                    <li>Organised an on-site training day and an on-site selection test.</li>
                    <li>Gave webinar presentations.</li>
                    <li>Coordinated a team of TAs during the evaluation process.</li>
                </ul>
                I introduced numerous ways of streamlining and automating the Numerus Fixus process, with one of
                the main contributions being MATIG. Before the Numerus Fixus was introduced in 2020, this process
                was called Matching.
            </ReadMoreText>
        </ExperienceSection>
        <ExperienceSection
            time="Oct 2020 - Jul 2022"
            title="Full Stack Developer MATIG"
            employer="University of groningen"
            employerLink="https://www.rug.nl/">
            <p>
                Designed, built, and maintained MATIG: a system that simplifies the organisation and improves
                the efficiency of the matching procedure for several studies at the Faculty of Science and
                Engineering.
            </p>
            <ReadMoreText>
                MATIG was built using Express.js, React, MongoDB, and Redis. It was deployed on the university
                servers using Kubernetes.
                See the <AnchorLink className="education-link" to="#matig"> MATIG</AnchorLink> project.
                Whereas previously the TAs would have to spend multiple hours a week manually transferring the results
                between
                systems, MATIG automated this into something that takes less than a minute. It also provided the
                coordinating team with an insightful overview of the progress and other convenience features.
            </ReadMoreText>
        </ExperienceSection>
        <ExperienceSection
            time="Apr 2021 - Oct 2021"
            title="Web Developer Themis"
            employer="University of groningen"
            employerLink="https://www.rug.nl/">
            <p>
                Laid the groundwork for a plagiarism scanning and reporting feature in the university's online
                grading system <a className="education-link" href="https://themis.housing.rug.nl/" target="_blank"
                    rel="noopener noreferrer">Themis</a>.
            </p>
        </ExperienceSection>
        <ExperienceSection
            time="Aug 2019 - Jan 2020"
            title="Student Mentor"
            employer="University of groningen"
            employerLink="https://www.rug.nl/">
            <p>
                Mentored a group of first-year Computing Science Bachelor students to provide
                guidance w.r.t. studying and university life.
            </p>
        </ExperienceSection>
    </>);
};

export { ExperiencePage };
