import "./projectsContainer.scss";

import ProjectsIntro from "../../pages/projectsIntro/ProjectsIntro";
import RvizCinematographer from "../../pages/rvizCinematographer/RvizCinematographer";
import PoseGraphPrediction from "../../pages/poseGraphPrediction/PoseGraphPrediction";
import MultiObjectTracking from "../../pages/multiObjectTracking/MultiObjectTracking";
import WeatherWebsite from "../../pages/weatherWebsite/WeatherWebsite";

export default function ProjectsContainer() {
    return (
        <div className="projectsContainer">
            <ProjectsIntro/>
            <RvizCinematographer/>
            <PoseGraphPrediction/>
            <MultiObjectTracking/>
            <WeatherWebsite/>
        </div>
    );
}