import './styles/App.css';
import Router from './router/Router.js';
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="App">
            <RouterProvider router={Router} />
        </div>
    );
}

export default App;
