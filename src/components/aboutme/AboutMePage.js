import React from 'react'
import {openInNewTab} from "../../util/newTabOpener";
import Button from "react-bootstrap/Button";
import RenderIcon from '../../images/blender.jpg';
import TravelIcon from '../../images/travel.jpg';


const EducationPage = () => {
    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-6">
                    <h1>About me</h1>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-2">
                    <h5>Excellent Presentation Skills</h5>
                </div>
                <div className="col-2">
                    <h5>Funny guy </h5>
                    <p style={{fontSize: "xx-small"}}>(I have a certificate)</p>
                </div>
                <div className="col-2">
                    <h5>Quick learner</h5>
                </div>
                <div className="col-2">
                    <h5>99 runecrafting</h5>

                    <p>
                        Quick learner. I am useful not because of what I know now, but because of what I can
                        know in a week.
                    </p>
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
                <div className="col-6 col-lg-3 text-start">
                    <h5 className="pb-3 pt-3">Travel</h5>
                    <p>
                        One particular field of Computing Science that I am very invested in is the field of
                        Computer
                        Graphics. I have always had a fascination with VFX and realistic renders.
                        Luckily, there is this beautiful piece of open-source software called Blender. I first came
                        into
                        contact with Blender when I was roughly 14 years old.
                        Since then, I have been working with Blender periodically and learning quite a few tricks of
                        the
                        trade (although I still have much left to learn).
                        Nevertheless, my enthusiasm with creating cool renders is ever-growing.
                    </p>
                </div>

            </div>
            <div className="row justify-content-center p-5">
                <div className="col-6 col-lg-3 text-start">
                    <h5 className="pb-3 pt-3">Render Enthusiast</h5>
                    <p>
                        One particular field of Computing Science that I am very invested in is the field of
                        Computer
                        Graphics. I have always had a fascination with VFX and realistic renders.
                        Luckily, there is this beautiful piece of open-source software called Blender. I first came
                        into
                        contact with Blender when I was roughly 14 years old.
                        Since then, I have been working with Blender periodically and learning quite a few tricks of
                        the
                        trade (although I still have much left to learn).
                        Nevertheless, my enthusiasm with creating cool renders is ever-growing.
                    </p>
                    <div className="row justify-content-center p-1">
                        <div className="col-12">
                            <Button variant="primary"
                                    onMouseDown={() => openInNewTab("https://www.linkedin.com/in/nielsbugel")}>
                                ArtStation
                            </Button>
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
        </>
    );
};

export default EducationPage;
