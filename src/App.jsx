import './fonts/Emberly-Thin.woff';
import Intro from "./components/intro/Intro";
import "./app.scss"
import ProjectsContainer from "./components/projectsContainer/ProjectsContainer";

function App() {
    return (
        <div className="app">
            <div className="sections">
                <Intro/>
                <ProjectsContainer/>
            </div>
        </div>
    );
}

export default App;
