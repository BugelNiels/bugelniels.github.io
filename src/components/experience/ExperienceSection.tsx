import React from 'react';

type ExperienceProps = {
    time: string,
    logo: string,
    title: string,
    employmentType: string,
    location: string,
    employerLink: string,
    employer: string,
    children: React.ReactNode
}

const ExperienceSection = (props: ExperienceProps) => {
    return (
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-2 col-lg-2 mt-2 sub-text align-self-start">
                <img src={props.logo} alt="Logo" width="64" height="64" style={{ borderRadius: "10px" }} />
            </div>
            <div className="col-10 col-lg-5 text-start">
                <div className="row">
                    <div className="col-12 text-start">
                        <h4>{props.title}</h4>
                    </div>
                </div>
                <div className="col-12 text-start">
                    <p style={{ fontSize: "large" }}>
                        <a className="education-link"
                            href={props.employerLink} target="_blank"
                            rel="noopener noreferrer">
                            {props.employer}
                        </a> <span style={{ marginLeft: "10px", marginRight: "10px" }} className='sub-text'>•︎</span>
                        <span className='sub-text'> {props.location} </span>
                        <br />
                        <span className='sub-text' style={{ fontSize: "medium" }}>
                            {props.time} <span style={{ marginLeft: "10px", marginRight: "10px" }}>•︎</span>
                            <span> {props.employmentType} </span>
                        </span>
                    </p>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export { ExperienceSection, ExperienceProps };
