import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="Portrait of Man"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Name</h1>
                </div>
                <a href="#work">
                    <img src="assets/down.png" alt="Arrow pointing down"/>
                </a>
            </div>
        </div>
    );
}