import "./projectsContainer.scss";
import RvizCinematographer from "../../pages/rvizCinematographer/RvizCinematographer";
import PoseGraphPrediction from "../../pages/poseGraphPrediction/PoseGraphPrediction";

export default function ProjectsContainer() {
    return (
        <div className="projectsContainer">
            <RvizCinematographer/>
            <PoseGraphPrediction/>
        </div>
    );
}