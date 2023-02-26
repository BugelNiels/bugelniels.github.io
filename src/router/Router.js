import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root.js';
import ErrorPage from '../routes/ErrorPage.js';
import HomePage from '../routes/HomePage.js';
import PortfolioPage from '../routes/PortfolioPage.js';
import ResumePage from '../routes/ResumePage.js';
import ProjectsPage from '../routes/ProjectsPage.js';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
            {
                path: "/portfolio",
                element: <PortfolioPage />,
            },
            {
                path: "/resume",
                element: <ResumePage />,
            }
        ]
    },
]);

export default Router;
