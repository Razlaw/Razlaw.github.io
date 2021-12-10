import "./intro.scss";
import {init} from "ityped";
import {useEffect, useRef} from "react";


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            delaySpeed: 60,
            backDelay: 1500,
            strings: ["String 1", "String 2", "String 3"]
        });
    }, []);
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
                    <h3>Job <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="Arrow pointing down"/>
                </a>
            </div>
        </div>
    );
}