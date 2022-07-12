import "./international.scss";

import {useEffect} from "react";

import {useInView} from "react-intersection-observer";

import {Link} from "react-router-dom";

import {ReactComponent as NorthAmerica} from '../../assets/north_america_wo_borders.svg';
import {ReactComponent as Eurasia} from '../../assets/eurasia_wo_borders.svg';

import {ReactComponent as FourthPlaceMedal} from '../../assets/icons/fourth_place_medal.svg';
import {ReactComponent as GoldMedal} from '../../assets/icons/gold_medal.svg';
import {ReactComponent as ScientificPaper} from '../../assets/icons/scientific_paper.svg';
import {ReactComponent as SilverMedal} from '../../assets/icons/silver_medal.svg';

import {getAnimationState} from "../../utils/utils";

export default function International() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    useEffect(() => {
        if(inView === true) {
            window.sessionStorage.setItem("internationalAnimationPlayed", "true");
        }
    }, [inView]);

    const animationState = getAnimationState(inView, window.sessionStorage.getItem("internationalAnimationPlayed"));

    return (
        <div className="international">
            <div className="contentContainer">
                <h1 className="internationalTitle">
                    International
                </h1>
                <div className="mapContainer">
                    <div className={"imgContainer " + animationState}>
                        <NorthAmerica className="northAmerica mapOutline"/>
                        <Eurasia className="eurasia mapOutline"/>
                    </div>
                </div>
                <div className="textContainer" ref={ref}>
                    <Link
                        className="locationBoxContainer"
                        to="/projects_descriptions/openid=5"
                    >
                        <div
                            className={"locationBox " + animationState}
                            id="losAngeles"
                        >
                            <h1 className="internationalEventTitle">2015</h1>
                            <h1 className="internationalEventTitle">Los Angeles</h1>
                            <FourthPlaceMedal className="medal"/>
                            <h2 className="internationalEventDescription">Robotik Wettbewerb</h2>
                            <h2 className="internationalEventDescription">DRC</h2>
                        </div>
                    </Link>
                    <Link
                        className="locationBoxContainer"
                        to="/projects_descriptions/openid=7"
                    >
                        <div
                            className={"locationBox " + animationState}
                            id="abuDhabi1"
                        >
                            <h1 className="internationalEventTitle">2017</h1>
                            <h1 className="internationalEventTitle">Abu Dhabi</h1>
                            <GoldMedal className="medal"/>
                            <h2 className="internationalEventDescription">Robotik Wettbewerb</h2>
                            <h2 className="internationalEventDescription">MRZIRC</h2>
                        </div>
                    </Link>
                    <a
                        className="locationBoxContainer"
                        href="https://scholar.google.com/citations?view_op=view_citation&hl=de&user=bcx5-kkAAAAJ&citation_for_view=bcx5-kkAAAAJ:qjMakFHDy7sC"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div
                            className={"locationBox " + animationState}
                            id="montreal"
                        >
                                <h1 className="internationalEventTitle">2019</h1>
                                <h1 className="internationalEventTitle">Montreal</h1>
                                <ScientificPaper className="paperIcon"/>
                                <h2 className="internationalEventDescription">Konferenz</h2>
                                <h2 className="internationalEventDescription">ICRA</h2>
                        </div>
                    </a>
                    <Link
                        className="locationBoxContainer"
                        to="/projects_descriptions/openid=8"
                    >
                        <div
                            className={"locationBox " + animationState}
                            id="abuDhabi2"
                        >
                            <h1 className="internationalEventTitle">2020</h1>
                            <h1 className="internationalEventTitle">Abu Dhabi</h1>
                            <SilverMedal className="medal"/>
                            <h2 className="internationalEventDescription">Robotik Wettbewerb</h2>
                            <h2 className="internationalEventDescription">MRZIRC</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}