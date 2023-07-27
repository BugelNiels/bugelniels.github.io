import React from 'react';

const Experience = (props) => {

    return (
        <>
            <div className="row justify-content-center pt-5 pb-5">
                <div className="col-3 col-lg-2 text-end mt-2">
                    {props.time}
                </div>
                <div className="col-9 col-lg-5 text-start">
                    <div className="row">
                        <div className="col-12 text-start">
                            <h3>{props.title}</h3>
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
