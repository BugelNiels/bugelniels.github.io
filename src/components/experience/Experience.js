import React from 'react';

const Experience = (props) => {

    return (
        <>
            <div className="row justify-content-center pt-5 pb-5">
                <div className="col-12 col-lg-2 time-period mt-2 sub-text">
                    {props.time}
                </div>
                <div className="col-12 col-lg-5 text-start">
                    <div className="row">
                        <div className="col-12 text-start">
                            <h4>{props.title}</h4>
                        </div>
                    </div>
                    <div className="col-12 text-start">
                        <p style={{fontSize: "larger"}}><a className="education-link"
                               href={props.employerLink} target="_blank"
                               rel="noopener noreferrer">{props.employer}</a></p>
                    </div>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default Experience;
