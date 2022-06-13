import "./skills.scss";

import {useInView} from "react-intersection-observer";

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="skills">
            <div className="skillsContainer">
                <h1 className={"skillsTitle " + (inView && "inView")}>
                    Bisherige Kenntnisse
                </h1>
                <div className="listsContainer" ref={ref}>
                    <div className="listContainer">
                        <h1 className={"listTitle " + (inView && "inView")} id="listTitleOne">Sprachen</h1>
                        <ul className={"skillList " + (inView && "inView")} id="listOne">
                            <li><p className="description skill">C++</p></li>
                            <li><p className="description skill">Python</p></li>
                            <li><p className="description skill">JavaScript</p></li>
                            <li><p className="description skill">HTML</p></li>
                            <li><p className="description skill">CSS / Sass</p></li>
                        </ul>
                    </div>
                    <div className="listContainer">
                        <h1 className={"listTitle " + (inView && "inView")} id="listTitleTwo">Bibliotheken</h1>
                        <ul className={"skillList " + (inView && "inView")} id="listTwo">
                            <li><p className="description skill">Point Cloud Library</p></li>
                            <li><p className="description skill">OpenCV</p></li>
                            <li><p className="description skill">PyTorch</p></li>
                            <li><p className="description skill">PyTorch Geometric</p></li>
                            <li><p className="description skill">React</p></li>
                        </ul>
                    </div>
                    <div className="listContainer">
                        <h1 className={"listTitle " + (inView && "inView")} id="listTitleThree">Sonstiges</h1>
                        <ul className={"skillList " + (inView && "inView")} id="listThree">
                            <li><p className="description skill">Linux</p></li>
                            <li><p className="description skill">Git</p></li>
                            <li><p className="description skill">ROS</p></li>
                            <li><p className="description skill">Qt Creator</p></li>
                            <li><p className="description skill">LaTex</p></li>
                            <li><p className="description skill">Inkscape</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}