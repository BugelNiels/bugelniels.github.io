import React from 'react'
import Button from "react-bootstrap/Button";
import {SvgIcon} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";

const EducationPage = () => {
    return (<>
        <div className="row justify-content-center p-5 section-title">
            <div className="col-12">
                <h1>About me</h1>
            </div>
        </div>
        <div className="row justify-content-center mt-5 pt-5 pb-5">
            <div className="col-12 col-lg-3 ">
                <div className="image-container">
                    <StaticImage
                        className="w-100 h-100"
                        src="../../images/travel_cropped.jpg"
                        alt="Me in Iceland :o"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </div>
            </div>
            <div className="col-12 col-lg-3 align-items-center d-flex">
                <div>
                    <h5 className="pb-3 pt-3 left-aligned ">Who am I?</h5>
                    <p className="text-start">
                        I am someone who is active and involved; I always try to spot (and implement) improvements
                        wherever possible. The TA jobs provided me with an excellent opportunity to learn further beyond
                        the basic course materials. They also helped me to further develop my soft skills, as I have
                        worked in many different teams and done countless of presentations/lectures by this point;
                        something I absolutely loved doing!
                    </p>
                    <p className="text-start">
                        Apart from my work at the university, I really enjoy playing guitar, hiking, 3D rendering, and
                        reading. I'm heading to New Zealand for 3 months at the end of August; a trip which may been
                        slightly inspired by the Lord of the Rings. It goes without saying that I'm also a big fan of
                        modern-day luxuries such as water and sleep. I like to think that I have convinced quite a few
                        students to sleep more as this seems to be a somewhat problematic area for a lot of CS students :)
                    </p>
                </div>
            </div>

        </div>
        <div className="row justify-content-center pt-5 pb-5">
            <div className="col-12 col-lg-3 align-items-center d-flex order-2 order-lg-1">
                <div>
                    <h5 className="pb-3 pt-3 left-aligned ">Render Enthusiast</h5>
                    <p className="text-start">
                        I have always had a fascination with VFX and realistic renders, which started when I
                        first picked up Blender around 10 years ago. Since then, I have been working with
                        Blender and learning quite a few tricks of the trade (although I still have much
                        left to learn). If you are curious, check out my ArtStation below. I periodically try and post
                        some renders there.
                    </p>
                    <div className="row left-aligned  p-1">
                        <div className="col-12">
                            <Button variant="primary"
                                    href="https://www.artstation.com/bugelniels"
                                    target="_blank" rel="noopener noreferrer">

                                <SvgIcon>
                                    {/* credit: plus icon from https://heroicons.com/ */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={0}
                                        stroke="currentColor">
                                        <path
                                            strokeLinejoin="round"
                                            d="M15.153,16.996l2.288,3.963c0,0 -4.952,0 -8.808,0c-2.758,0 -5.299,-1.499 -6.633,-3.913c0,-0.001 0,-0.001 0,-0.001l0.029,-0.049l13.124,0Zm-4.798,-13.955c0,0 0,0 0,0c2.781,0 5.357,1.463 6.782,3.852c1.172,1.965 2.593,4.349 3.764,6.312c1.418,2.378 1.467,5.33 0.128,7.753c0,0.001 0,0.001 0,0.001l-0.33,0l-10.344,-17.918Zm3.168,11.133l-9.811,0l4.985,-8.359l4.826,8.359Z"
                                        />
                                    </svg>
                                </SvgIcon> ArtStation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-3 text-start align-items-center d-flex order-1 order-lg-2">
                <div className="image-container">
                    <StaticImage
                        className="w-100 h-100"
                        src="../../images/blender.jpg"
                        alt="Cool render"
                        placeholder="blurred"
                        layout="constrained"
                    />
                </div>
            </div>
        </div>
    </>);
};

export default EducationPage;
