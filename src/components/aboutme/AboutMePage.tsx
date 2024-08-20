import React from 'react'
import Button from "react-bootstrap/Button";
import { StaticImage } from "gatsby-plugin-image";
import ArtStationIcon from "../icons/ArtStationIcon";

const AboutMePage = () => {
    return (
        <>
            <div className="row justify-content-center p-5 section-title">
                <div className="col-12">
                    <h1>About me</h1>
                </div>
            </div>
            <div className="row justify-content-center mb-5 pt-5 pb-5">
                <div className="col-12 col-lg-4 ">
                    <div className="image-container">
                        <StaticImage
                            className="w-100 h-100"
                            src="../../images/iceland.webp"
                            alt="Me in Iceland :o"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-4 align-items-center d-flex">
                    <div>
                        <h5 className="pb-3 pt-3 center-aligned-left-lg">Who am I?</h5>
                        <p className="text-start">
                            I am a computing scientist, book enjoyer, and experienced Google Search user.
                            As far as CS is concerned, my interests lie primarily in the fields of High-Performance Computing, Computer Graphics, and Image Processing.
                            Mainly I work with C++, but I have done projects in numerous languages and with various frameworks.
                            Just like I enjoy a clean and organised house (up to a reasonable limit of course), I also like clean and organised software.
                            As a result, I always try and spend some effort refactoring and cleaning up projects that I actively work on.
                            Clean code bases are way more maintainable, easier to understand and generally a lot more fun to work with.
                        </p>
                        <p className="text-start">
                            In my spare time, I really enjoy playing guitar, hiking, 3D rendering, and
                            reading. I (somewhat) recently completed my dream trip to New Zealand; a trip which may been
                            slightly inspired by the Lord of the Rings. Can definitely recommend it, it's an amazingly beautiful country.
                            It goes without saying that I'm also a big fan of modern-day luxuries such as water and sleep.
                        </p>
                    </div>
                </div>

            </div>
            <div className="row justify-content-center mt-5 mb-5 pt-5 pb-5">
                <div className="col-12 col-lg-4 align-items-center d-flex order-2 order-lg-1">
                    <div>
                        <p className="text-start">
                            I have always had a fascination with visual effects and rendering, which started when I
                            first picked up Blender around 10 years ago. Since then, I have been working with
                            Blender and learning quite a few tricks of the trade (although I still have much
                            left to learn). If you are curious, check out my ArtStation below. I periodically try and post
                            some renders there (though I don't have as much time for it these days as I used to).
                        </p>
                        <div className="row center-aligned-left-lg p-1">
                            <div className="col-12">
                                <Button variant="primary"
                                    href="https://www.artstation.com/bugelniels"
                                    target="_blank" rel="noopener noreferrer">
                                    <ArtStationIcon /> ArtStation
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 text-start align-items-center d-flex order-1 order-lg-2">
                    <div className="image-container">
                        <StaticImage
                            className="w-100 h-100"
                            src="../../images/blender.webp"
                            alt="Cool render"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </div>
                </div>
            </div>
        </>);
};

export { AboutMePage };
