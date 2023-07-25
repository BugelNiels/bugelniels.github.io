import React from 'react'
import {Link} from "react-router-dom";

const Education = (props) => {
    return (
        <div className="row justify-content-center p-5">
            <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-end mt-2">
                {props.time}
            </div>
            <div className="col-8 col-sm-8 col-md-8 col-lg-5 text-start">
                <div className="row">
                    <div className="col-12 text-start">
                        <h3>{props.name}</h3>
                    </div>
                </div>
                <div className="col-12 text-start">
                    <h5><Link className="education-link" to={props.programmeLink}
                              target="_blank" rel="noopener noreferrer">{props.institution}</Link></h5>
                </div>
                <p>
                    <b>GPA:</b> {props.GPA}
                </p>
                {props.children}
            </div>
        </div>
    );
};

export default Education;
