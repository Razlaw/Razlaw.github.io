import "./intro.scss";

export default function Intro() {
    return (
        <div className="intro">
            <div className="contentContainer">
                <div className="leftContainer">
                    <div className="imgContainer">
                        Image Placeholder
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="textContainer">
                        <h2 className="headlineMedium" id="myName">Jan Razlaw</h2>
                        <h1 className="headlineBig" id="jobDescription">Computer Scientist</h1>
                        <p className="text" id="myDescription">
                            Text Placeholder
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}