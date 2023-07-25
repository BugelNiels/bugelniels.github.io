import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import {ListGroupItem} from "react-bootstrap";


const EducationPage = () => {
    return (
        <>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Sep 2020 - Jul 2023
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Master Computing Science</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link" to="https://www.rug.nl/masters/computing-science/?lang=en" target="_blank" rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        <b>Track:</b>  Data Science & Systems Complexity
                    </p>
                    <p>
                        <b>GPA:</b> 9.0/10.0
                    </p>
                    <b>Awards & Activities:</b>
                    <ListGroup>
                        <ListGroupItem>Best paper presentation award for the Student Colloquium course.</ListGroupItem>
                        <ListGroupItem>Best 2 minute madness presentation award for the Student Colloquium course.</ListGroupItem>
                        <ListGroupItem>Best presentation award for the Information Systems course.</ListGroupItem>
                        <ListGroupItem>1st place Presentation Contest for the Introduction to Data Science course.</ListGroupItem>
                        <ListGroupItem>1st place Presentation Contest for the Introduction to Data Science course.</ListGroupItem>
                        <ListGroupItem>Student member interview committee Tenure Track Assistant Professor (x2).</ListGroupItem>
                        <ListGroupItem>Student member interview committee Teachers for Computing Science Programme.</ListGroupItem>
                    </ListGroup>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    Sep 2017 - Jul 2020
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>Bachelor Computing Science</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link" to="https://www.rug.nl/bachelors/computing-science/?lang=en" target="_blank" rel="noopener noreferrer">University of groningen</Link></h5>
                        </div>
                    </div>
                    <p>
                        <b>GPA:</b> 8.8/10.0
                    </p>
                </div>
            </div>
        </>
    );
};

export default EducationPage;
