import "./projectsContainer.scss";
import RvizCinematographer from "../../pages/rvizCinematographer/RvizCinematographer";
import Project2 from "../project2/Project2";

export default function ProjectsContainer() {
    return (
        <div className="projectsContainer">
            <RvizCinematographer/>
            <Project2/>
        </div>
    );
}