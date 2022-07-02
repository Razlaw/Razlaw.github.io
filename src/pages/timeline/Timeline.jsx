import "./timeline.scss";
import 'react-vertical-timeline-component/style.min.css';

import React from "react";

import {useNavigate} from "react-router-dom";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import Logo from "../../components/logo/Logo";

import {ReactComponent as WorkIcon} from '../../assets/icons/work.svg';
import {ReactComponent as CodingIcon} from '../../assets/icons/coding.svg';

import {timeline_data} from "../../data/timelineElements";

function getIcon(icon_id) {
    switch (icon_id) {
        case "coding":
            return <CodingIcon/>;
        case "work":
            return <WorkIcon/>;
        default:
            return <WorkIcon/>;
    }
}

export default function Timeline() {
    const navigate = useNavigate();

    return (
        <div className="timelineContainer">
            <Logo/>
            <h1 className="timelineTitle">Zeitstrahl</h1>
            <div className="contentContainer">
                {timeline_data.map((data, key) => {
                    return (
                        <div className="timelinePartContainer" key={key}>
                            <div
                                className="educationTimelineContainer"
                                onClick={() => {navigate("/education")}}
                            >
                                <div className="educationTimelineContent" id={"educationTitle" + key}>
                                    <p>
                                        {data.education_title}
                                    </p>
                                </div>
                            </div>
                            <div className="workContainer">
                                <VerticalTimeline layout='1-column-left'>
                                    {data.timeline_elements.map((element_data, element_key) => {
                                        return (
                                            <VerticalTimelineElement
                                                date={element_data.date}
                                                icon={getIcon(element_data.icon_id)}
                                                key={element_key}
                                            >
                                                <h1 className="vertical-timeline-element-title">{element_data.title}</h1>
                                                <p className="vertical-timeline-element-subtitle">{element_data.subtitle}</p>
                                                <a
                                                    className="vertical-timeline-element-link"
                                                    href={element_data.link_destination}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {element_data.link_text}
                                                </a>
                                            </VerticalTimelineElement>
                                        )
                                    })}
                                </VerticalTimeline>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}