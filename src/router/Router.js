import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Root from '../components/Root.js';
import ErrorPage from '../routes/ErrorPage.js';
import HomePage from '../routes/HomePage.js';
import EducationPage from '../routes/EducationPage.js';
import ExperiencePage from '../routes/ExperiencePage.js';
import ProjectsPage from '../routes/ProjectsPage.js';
import AboutMePage from "../routes/AboutMePage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/projects",
                element: <ProjectsPage/>,
            },
            {
                path: "/education",
                element: <EducationPage/>,
            },
            {
                path: "/experience",
                element: <ExperiencePage/>,
            },
            {
                path: "/aboutme",
                element: <AboutMePage/>,
            }
        ]
    },
]);

export default Router;
