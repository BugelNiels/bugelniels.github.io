import React from 'react';
import {Link} from "react-router-dom";

const Experience = (props) => {

    return (
        <>
            <div className="row justify-content-center p-5">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-start">
                    {props.time}
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-6 text-start">
                    <div className="row">
                        <div className="col-6 text-start">
                            <h3>{props.title}</h3>
                        </div>
                        <div className="col-6 text-end">
                            <h5><Link className="education-link"
                                      to={props.employerLink} target="_blank"
                                      rel="noopener noreferrer">{props.employer}</Link></h5>
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Experience;
