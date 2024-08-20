import React from 'react';
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { ReadMoreText } from "../ReadMore";
import { ExperienceSection } from "./ExperienceSection";
import CernLogo from "../../images/companies/cern.webp";
import RugLogo from "../../images/companies/rug.webp";
import DataqueueLogo from "../../images/companies/dataqueue.webp";

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
            logo={CernLogo}
            time="May 2024 - Current"
            title="Computing Engineer: Data Storage"
            employer="CERN"
            employerLink="https://home.cern/"
            employmentType="Full-time"
            location="Meyrin, Switzerland">

            C++ software engineer and operations support for the <a href="https://cta.web.cern.ch/" target="_blank" rel="noopener noreferrer">CERN Tape Archive</a> team.
        </ExperienceSection>
        <ExperienceSection
            logo={DataqueueLogo}
            time="Feb 2024 - Apr 2024"
            title="Backend Software Engineer"
            employer="Dataqueue"
            employerLink="https://www.dataqueue.ai/"
            employmentType="Contract (32-40 hours per week)"
            location="Groningen, Netherlands">
            <p>
                Implemented, tested and deployed the backend infrastructure for a real-time call analytics software platform.
            </p>
            <ReadMoreText>
                This job was a temporary position/contract while I was looking for a long term job.
                Implemented several microservices in Python and Typescript (Node.js). They were deployed to a Google Kubernetes Engine cluster using Kubernetes/Helm.
                Built multiple custom Jenkins pipelines for building images, deploying them, and performing integration/system tests.
            </ReadMoreText>
        </ExperienceSection>
        <ExperienceSection
            logo={RugLogo}
            time="Feb 2019 - Jul 2023"
            title="Teaching Assistant"
            employer="University of Groningen"
            employerLink="https://www.rug.nl/"
            employmentType="Part-time"
            location="Groningen, Netherlands">
            <p>
                Teaching Assistant (TA) for a number of courses within the Computing Science programme.
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
                <p>
                    <h5>Student Mentor (2019/2020</h5>
                </p>
            </ReadMoreText>


        </ExperienceSection>

        <ExperienceSection
            logo={RugLogo}
            time="Oct 2019 - Jul 2023"
            title="Numerus Fixus Coordinator CS"
            employer="University of Groningen"
            employerLink="https://www.rug.nl/"
            employmentType="Part-time"
            location="Groningen, Netherlands">
            <p>
                Coordinator of the Numerus Fixus procedure for Computing Science.
            </p>
            <ReadMoreText>
                <ul>
                    <li>Designed and wrote the selection tests.</li>
                    <li>Organised an on-site training day and an on-site selection test.</li>
                    <li>Gave webinar presentations.</li>
                    <li>Coordinated a team of TAs during the evaluation process.</li>
                    <li>Introduced numerous ways of streamlining and automating the Numerus Fixus process.</li>
                </ul>
                Over 400 students take part in this procedure for the years I was coordinator.
                Before the Numerus Fixus was introduced in 2020, this process was called Matching.
            </ReadMoreText>
        </ExperienceSection>
        <ExperienceSection
            logo={RugLogo}
            time="Oct 2020 - Jul 2022"
            title="Full Stack Developer"
            employer="University of Groningen"
            employerLink="https://www.rug.nl/"
            employmentType="Part-time"
            location="Groningen, Netherlands">
            <p>
                A number of positions involving web development.
            </p>
            <ReadMoreText>
                <ul>
                    <li>
                        Designed, built, and maintained MATIG: a system that simplifies the organisation and improves
                        the efficiency of the matching procedure for several studies at the Faculty of Science and
                        Engineering.
                    </li>
                    <li>
                        Laid the groundwork for a plagiarism scanning and reporting feature in the university's online
                        grading system <a className="education-link" href="https://themis.housing.rug.nl/" target="_blank"
                            rel="noopener noreferrer">Themis</a>.
                    </li>
                </ul>
            </ReadMoreText>
        </ExperienceSection>
    </>);
};

export { ExperiencePage };
