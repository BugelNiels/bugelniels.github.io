import React from 'react'

const Education = (props) => {
    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12 col-lg-2 time-period mt-2 sub-text">
                {props.time}
            </div>
            <div className="col-12 col-lg-5 text-start">
                <div className="row">
                    <div className="col-12 text-start">
                        <h4 className="m-0 p-0">{props.name}</h4>
                        {props.subName &&
                            <p className="sub-title">{props.subName}</p>
                        }
                    </div>
                </div>
                <div className="col-12 text-start">
                    <p style={{fontSize: "larger"}}><a className="education-link" href={props.programmeLink}
                                                       target="_blank" rel="noopener noreferrer">{props.institution}</a>
                    </p>
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
