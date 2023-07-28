import * as React from "react"
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import PersonalNavBar from "../components/PersonalNavBar";


const IndexPage = () => {
    return (
        <main className="main-container flex-column">
            <PersonalNavBar/>

            <div className="container-fluid flex-grow-1">
                <HomePage/>
            </div>

            <Footer/>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Niels Bugel</title>
