import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const EducationPage = () => {
    return (
        <>
            <div className="row justify-content-center p-5 secondary-comp">
                <div className="col-6">
                    <h1>About me</h1>
                </div>
            </div>
            <div className="row justify-content-center h-100 p-5">

                <div className="col-6 text-start">
                    <h5>Blender Fan</h5>
                    <p>
                        One particular field of Computing Science that I am very invested in is the field of Computer
                        Graphics. I have always had a fascination with VFX and realistic renders.
                        Luckily, there is this beautiful piece of open-source software called Blender. I first came into
                        contact with Blender when I was roughly 14 years old.
                        Since then, I have been working with Blender periodically and learning quite a few tricks of the
                        trade (although I still have much left to learn).
                        Nevertheless, my enthusiasm with creating cool renders is ever-growing. As such, I want to
                        showcase
                        a number of projects that I did in Blender.
                        All of the projects below were created in with Blender and Photoshop.

                        If you are curious and don't want to miss out on new renders, then have a look at my Artstation
                        page.
                    </p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/051/948/409/large/rogari-ferrari-dark1-shopped2.jpg?1658574622"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/059/882/595/large/niels-cg-competition2-shopped-shopped.jpg?1677346057"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/059/591/821/large/niels-book4-shopped2.jpg?1676719894"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="row justify-content-center h-100 p-5">

                <div className="col-6 text-start">
                    <h5>Travels</h5>
                    <p>
                        Love to travel
                    </p>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/051/948/409/large/rogari-ferrari-dark1-shopped2.jpg?1658574622"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/059/882/595/large/niels-cg-competition2-shopped-shopped.jpg?1677346057"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://cdnb.artstation.com/p/assets/images/images/059/591/821/large/niels-book4-shopped2.jpg?1676719894"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default EducationPage;
