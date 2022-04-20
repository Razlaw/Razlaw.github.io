import "./project1.scss";

export default function Project1() {
    return (
        <div className="project1">
            <div className="leftContainer">
                <div className="imgContainer">
                    <img src="https://github.com/AIS-Bonn/rviz_cinematographer/blob/master/readme/output.gif?raw=true" alt="Portrait of Man"/>
                </div>
            </div>
            <div className="rightContainer">
                <div className="textContainer">
                    <h1 className="headlineBig" id="projectName">Rviz Cinematographer</h1>
                    <p className="text" id="projectDescription">
                        Open Source Paket um benutzerfreundlich komplexe Kamerafahrten in Rviz zu erstellen.
                    </p>
                    <a
                        href="https://github.com/AIS-Bonn/rviz_cinematographer"
                        target="_blank"
                        rel="noreferrer">
                        Link to repo
                    </a>
                </div>
            </div>
        </div>
    );
}