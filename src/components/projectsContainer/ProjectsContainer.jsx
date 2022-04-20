import "./projectsContainer.scss";
import Project1 from "../project1/Project1";
import Project2 from "../project2/Project2";

export default function ProjectsContainer() {
    return (
        <div className="projectsContainer">
            <Project1/>
            <Project2/>
        </div>
    );
}