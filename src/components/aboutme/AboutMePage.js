import React from 'react'
import {openInNewTab} from "../../util/newTabOpener";
import Button from "react-bootstrap/Button";
import RenderIcon from '../../images/blender.jpg';
import TravelIcon from '../../images/travel.jpg';
import {SvgIcon} from "@mui/material";

const EducationPage = () => {
    return (<>
        <div className="row justify-content-center p-5 section-title">
            <div className="col-6">
                <h1>About me</h1>
            </div>
        </div>
        <div className="row justify-content-center mt-5 p-5">
            <div className="col-6 col-lg-3 text-start align-items-center d-flex">
                <img
                    className="d-block w-100"
                    src={TravelIcon}
                    alt="Me in Iceland :o"
                />
            </div>
            <div className="col-6 col-lg-3 text-start  align-items-center d-flex">
                <div>
                    <h5 className="pb-3 pt-3">I am someone who:</h5>
                    <ul>
                        <li>learns extremely quickly</li>
                        <li>can easily integrate within your team</li>
                        <li>loves to give presentations and be involved</li>
                        <li>always tries to spot possible improvements</li>
                        <li>enjoys playing guitar and being physically active</li>
                        <li>drinks water</li>
                        <li>writes documentation.</li>
                    </ul>
                </div>
            </div>

        </div>
        <div className="row justify-content-center p-5">
            <div className="col-6 col-lg-3 text-start align-items-center d-flex">
                <div>

                    <h5 className="pb-3 pt-3">Render Enthusiast</h5>
                    <p>
                        I have always had a fascination with VFX and realistic renders, which started when I
                        first picked up Blender around 10 years ago. Since then, I have been working with
                        Blender and learning quite a few tricks of the trade (although I still have much
                        left to learn). If you are curious, check out my ArtStation below. I periodically try and post
                        some renders there.
                    </p>
                    <div className="row justify-content-center p-1">
                        <div className="col-12">
                            <Button variant="primary"
                                    onMouseDown={() => openInNewTab("https://www.artstation.com/bugelniels")}>

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

            <div className="col-6 col-lg-3 text-start align-items-center d-flex">
                <img
                    className="d-block w-100"
                    src={RenderIcon}
                    alt="Cool render"
                />
            </div>
        </div>
    </>);
};

export default EducationPage;
