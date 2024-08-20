import React from 'react'

interface EducationProps {
    time: string;
    name: string;
    logo: string;
    subName?: string;
    programmeLink: string;
    institution: string;
    GPA: string;
    children?: React.ReactNode;
}

const EducationSection = (props: EducationProps) => {
    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-2 col-lg-2 mt-2 sub-text align-self-start">
                <img src={props.logo} alt="Logo" width="64" height="64" style={{ borderRadius: "10px"}} />
            </div>
            <div className="col-10 col-lg-5 text-start">
                <div className="row">
                    <div className="col-12 text-start">
                        <h4 className="m-0 p-0">
                            {props.name}
                        </h4>
                    </div>
                </div>
                <div className="col-12 text-start">
                    <p style={{ fontSize: "larger" }}>
                        <a className="education-link" href={props.programmeLink}
                            target="_blank" rel="noopener noreferrer">{props.institution}</a>
                        <br />
                        <span className='sub-text' style={{ fontSize: "medium" }}>
                            {props.subName && <>{props.subName} <br /></>}
                            {props.time}
                        </span>
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

export { EducationSection, EducationProps };
