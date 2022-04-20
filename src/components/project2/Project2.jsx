import "./project2.scss";

export default function Project2() {
    return (
        <div className="project2">
            <div className="leftContainer">
                <div className="imgContainer">
                    <img src="https://github.com/AIS-Bonn/pose_graph_prediction/blob/master/docs/readme/pipeline_overview.png?raw=true" alt="Portrait of Man"/>
                </div>
            </div>
            <div className="rightContainer">
                <div className="textContainer">
                    <h1 className="headlineBig" id="projectName">Pose Graph Prediction</h1>
                    <p className="text" id="projectDescription">
                        Vorhersage von Bewegungen durch Graph Neuronale Netze.
                    </p>
                    <a
                        href="https://github.com/AIS-Bonn/pose_graph_prediction"
                        target="_blank"
                        rel="noreferrer">
                        Link to repo
                    </a>
                </div>
            </div>
        </div>
    );
}