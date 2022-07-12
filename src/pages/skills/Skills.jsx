import "./skills.scss";

import React, {useEffect} from "react";

import {useInView} from "react-intersection-observer";

import {getAnimationState} from "../../utils/utils";

import {skill_lists} from "../../data/skill_lists";

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    useEffect(() => {
        if(inView === true) {
            window.sessionStorage.setItem("skillsAnimationPlayed", "true");
        }
    }, [inView]);

    const animationState = getAnimationState(inView, window.sessionStorage.getItem("skillsAnimationPlayed"));

    return (
        <div className="skills">
            <div className="skillsContainer">
                <h1 className={"skillsTitle " + animationState}>
                    Bisherige Kenntnisse
                </h1>
                <div className="listsContainer" ref={ref}>
                    {skill_lists.map((skillList, key) => {
                        return (
                            <div className="listContainer" key={key}>
                                <h1 className={"listTitle " + animationState} id={"skillListTitle" + key}>{skillList.title}</h1>
                                <ul className={"skillList " + animationState} id={"skillList" + key}>
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