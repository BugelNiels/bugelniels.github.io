import * as React from "react"
import { Link } from "gatsby"
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from "../components/Footer";
import { PersonalNavBar } from "../components/PersonalNavBar";

const NotFoundPage = () => {
    return (
        <main className="main-container flex-column">
            <PersonalNavBar />

            <div className="container-fluid flex-grow-1">
                <div className="row p-5">
                    <h1>Page not found</h1>
                </div>
                <div className="row p-5">
                    <p>
                        Sorry, we couldn’t find what you were looking for.
                    </p>
                </div>
                <div className="row p-5">
                    <p>
                        <Link to="/">Go home</Link>
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default NotFoundPage;

export const Head = () => <title>Not found</title>
