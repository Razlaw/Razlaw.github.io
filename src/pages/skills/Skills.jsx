import "./skills.scss";

export default function Skills() {
    return (
        <div className="skills">
            <div className="skillsContainer">
                <h1 className="skillsTitle">
                    Kenntnisse
                </h1>
                <div className="listsContainer">
                    <div className="listContainer" id="listOne">
                        <h1 className="listTitle">Sprachen</h1>
                        <ul>
                            <li><p className="text skill">C++</p></li>
                            <li><p className="text skill">Python</p></li>
                            <li><p className="text skill">JavaScript</p></li>
                            <li><p className="text skill">HTML</p></li>
                            <li><p className="text skill">CSS</p></li>
                        </ul>
                    </div>
                    <div className="listContainer" id="listTwo">
                        <h1 className="listTitle">List Title</h1>
                        <ul>
                            <li><p className="text skill">List Item one</p></li>
                            <li><p className="text skill">List Item two</p></li>
                            <li><p className="text skill">Longer List Item one</p></li>
                        </ul>
                    </div>
                    <div className="listContainer" id="listThree">
                        <h1 className="listTitle">List Title</h1>
                        <ul>
                            <li><p className="text skill">List Item one</p></li>
                            <li><p className="text skill">List Item two</p></li>
                            <li><p className="text skill">Longer List Item one</p></li>
                        </ul>
                    </div>
                    <div className="listContainer" id="listFour">
                        <h1 className="listTitle">List Title</h1>
                        <ul>
                            <li><p className="text skill">List Item one</p></li>
                            <li><p className="text skill">List Item two</p></li>
                            <li><p className="text skill">Longer List Item one</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}