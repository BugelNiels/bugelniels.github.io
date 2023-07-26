import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Root from '../components/Root.js';
import HomePage from '../components/HomePage.js';
import EducationPage from '../components/education/EducationPage.js';
import ExperiencePage from '../components/experience/ExperiencePage.js';
import ProjectsPage from '../components/projects/ProjectsPage.js';
import AboutMePage from "../components/aboutme/AboutMePage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
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
