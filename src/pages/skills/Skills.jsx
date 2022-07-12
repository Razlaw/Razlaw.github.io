import "./skills.scss";

import React from "react";

import {useInView} from "react-intersection-observer";

import {skill_lists} from "../../data/skill_lists";

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
                    {skill_lists.map((skillList, key) => {
                        return (
                            <div className="listContainer" key={key}>
                                <h1 className={"listTitle " + (inView && "inView")} id={"skillListTitle" + key}>{skillList.title}</h1>
                                <ul className={"skillList " + (inView && "inView")} id={"skillList" + key}>
                                    {skillList.skills.map((skill, skillKey) => {
                                        return (
                                            <li key={skillKey}><p className="description skill">{skill}</p></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}