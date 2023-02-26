import './styles/App.css';
import Router from './router/Router.js';
import { RouterProvider } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <RouterProvider router={Router} />
        </div>
    );
}

export default App;
