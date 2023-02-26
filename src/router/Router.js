import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root.js';
import ErrorPage from '../routes/ErrorPage.js';
import HomePage from '../routes/HomePage.js';

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
                element: <div>Projects!</div>,
            },
            {
                path: "/portfolio",
                element: <div>Portfolio!</div>,
            },
            {
                path: "/resume",
                element: <div>Resume!</div>,
            },
            {
                path: "/contact",
                element: <div>Contact!</div>,
            }
        ]
    },
]);

export default Router;
