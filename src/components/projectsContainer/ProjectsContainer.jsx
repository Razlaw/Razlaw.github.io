import "./projectsContainer.scss";
import RvizCinematographer from "../../pages/rvizCinematographer/RvizCinematographer";
import PoseGraphPrediction from "../../pages/poseGraphPrediction/PoseGraphPrediction";
import MultiObjectTracking from "../../pages/multiObjectTracking/MultiObjectTracking";
import WeatherWebsite from "../../pages/weatherWebsite/WeatherWebsite";

export default function ProjectsContainer() {
    return (
        <div className="projectsContainer">
            <RvizCinematographer/>
            <PoseGraphPrediction/>
            <MultiObjectTracking/>
            <WeatherWebsite/>
        </div>
    );
}