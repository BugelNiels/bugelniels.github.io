import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import { EducationSection } from "./EducationSection";
import { ReadMoreText } from "../ReadMore";
import RugLogo from "../../images/companies/rug.webp";


const EducationPage = () => {
    return (
        <>
            <div className="row justify-content-center pt-5 pb-5 section-title">
                <div className="col-12">
                    <h1>Education</h1>
                </div>
            </div>

            <EducationSection
                logo={RugLogo}
                time="Sep 2020 - Jul 2023"
                name="MSc. in Computing Science"
                subName="Data Science & Systems Complexity"
                institution="University of groningen"
                programmeLink="https://www.rug.nl/masters/computing-science/?lang=en"
                GPA="9.0/10.0 - Cum Laude">
                <b>Awards & Activities:</b>

                <ReadMoreText>
                    <ListGroup className="mt-3">
                        <ListGroupItem>
                            Best paper presentation award for the Student Colloquium course.
                        </ListGroupItem>
                        <ListGroupItem>
                            Best 2 minute madness presentation award for the Student Colloquium course.
                        </ListGroupItem>
                        <ListGroupItem>
                            Best presentation award for the Information Systems course.
                        </ListGroupItem>
                        <ListGroupItem>
                            1st place Presentation Contest for the Introduction to Data Science course.
                        </ListGroupItem>
                        <ListGroupItem>
                            1st place Presentation Contest for the Introduction to Data Science course.
                        </ListGroupItem>
                        <ListGroupItem>
                            Student member interview committee Tenure Track Assistant Professor (x2).
                        </ListGroupItem>
                        <ListGroupItem>
                            Student member interview committee Teachers for Computing Science Programme.
                        </ListGroupItem>
                    </ListGroup>
                </ReadMoreText>
            </EducationSection>

            <EducationSection
                logo={RugLogo}
                time="Sep 2017 - Jul 2020"
                name="BSc. in Computing Science"
                institution="University of groningen"
                programmeLink="https://www.rug.nl/bachelors/computing-science/?lang=en"
                GPA="8.8/10.0 - Cum Laude">
            </EducationSection>
        </>
    );
};

export { EducationPage };
