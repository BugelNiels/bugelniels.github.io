import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import {ListGroupItem} from "react-bootstrap";
import Education from "./Education";
import ReadMoreText from "../ReadMore";


const EducationPage = () => {
    return (
        <>
            <div className="row justify-content-center pt-5 pb-5 section-title">
                <div className="col-12">
                    <h1>Education</h1>
                </div>
            </div>

            <Education time="Sep 2020 - Jul 2023"
                       name="Master Computing Science"
                       institution="University of groningen"
                       programmeLink="https://www.rug.nl/masters/computing-science/?lang=en"
                       GPA="9.0/10.0 - Cum Laude">
                <p>
                    <b>Track:</b> Data Science & Systems Complexity
                </p>
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
            </Education>


            <Education time="Sep 2017 - Jul 2020"
                       name="Bachelor Computing Science"
                       institution="University of groningen"
                       programmeLink="https://www.rug.nl/bachelors/computing-science/?lang=en"
                       GPA="8.8/10.0 - Cum Laude">

            </Education>
        </>
    );
};

export default EducationPage;
