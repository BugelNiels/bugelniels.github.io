import * as React from "react"
import {Link} from "gatsby"

const NotFoundPage = () => {
    return (
        <main className="justify-content-center text-center">
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
        </main>
    )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
