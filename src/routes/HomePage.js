import React from 'react';


const HomePage = () => {
    return (
        <>
            <div className="row justify-content-center p-5">
                <div className="col-md-8">
                    <h3>Hi, I'm Niels</h3>
                    <p>
                        Welcome to my website.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-md-8">
                    <h3>Projects</h3>
                    Passionate programmer blah blah
                    Featured projects: nitro, distributed gpu convolution, conic subdivision
                    view all projects
                </div>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-md-8">
                    <h3>Portfolio</h3>
                    Passionate computer graphics
                    featured renders
                    view all renders
                </div>
            </div>

            <div className="row justify-content-center p-5">
                <div className="col-md-8">
                    <h3>Resume</h3>
                    Are you curious, you can view my resume here.
                </div>
            </div>

        </>
    );
};

export default HomePage;
