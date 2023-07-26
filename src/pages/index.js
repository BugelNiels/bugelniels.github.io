import * as React from "react"
import '../styles/App.css';
import "../styles/index.css"
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import PersonalNavBar from "../components/PersonalNavBar";


const IndexPage = () => {
    return (
        <main className="App main-container flex-column">
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
