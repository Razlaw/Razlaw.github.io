import "./timeline.scss";
import 'react-vertical-timeline-component/style.min.css';

import React from "react";

import {Link} from "react-router-dom";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import {ScrollRestoration} from "../../utils/utils";

import Logo from "../../components/logo/Logo";

import {ReactComponent as CodingIcon} from '../../assets/icons/coding.svg';
import {ReactComponent as ContractIcon} from '../../assets/icons/contract.svg';
import {ReactComponent as KeyboardIcon} from '../../assets/icons/keyboard.svg';
import {ReactComponent as PaperIcon} from '../../assets/icons/paper.svg';
import {ReactComponent as ReviewIcon} from '../../assets/icons/review.svg';
import {ReactComponent as TrophyIcon} from '../../assets/icons/trophy.svg';

import {timeline_data} from "../../data/timelineElements";

function getIcon(icon_id) {
    switch (icon_id) {
        case "challenge":
            return <TrophyIcon/>;
        case "coding":
            return <CodingIcon/>;
        case "contract":
            return <ContractIcon/>;
        case "publication":
            return <PaperIcon/>;
        case "review":
            return <ReviewIcon/>;
        case "work":
            return <KeyboardIcon/>;
        default:
            return <KeyboardIcon/>;
    }
}

export default function Timeline() {
    const onScrollFunction = ScrollRestoration("timelineContainerID");

    return (
        <div className="timelineContainer" id="timelineContainerID" onScroll={onScrollFunction}>
            <Logo/>
            <h1 className="timelineTitle">Zeitstrahl</h1>
            <div className="contentContainer">
                {timeline_data.map((data, key) => {
                    return (
                        <div className="timelinePartContainer" key={key}>
                            <Link
                                className="educationTimelineContainer"
                                to="/education"
                            >
                                <div className="educationTimelineContent" id={"educationTitle" + key}>
                                    <p>
                                        {data.education_title}
                                    </p>
                                </div>
                            </Link>
                            <div className="workContainer">
                                <VerticalTimeline layout='1-column-left'>
                                    {data.timeline_elements.map((element_data, element_key) => {
                                        return (
                                            <VerticalTimelineElement
                                                date={element_data.date}
                                                icon={getIcon(element_data.icon_id)}
                                                key={element_key}
                                            >
                                                <p className="vertical-timeline-element-tag">{element_data.tag}</p>
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