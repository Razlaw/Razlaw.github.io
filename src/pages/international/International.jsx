import "./international.scss";

import {ReactComponent as NorthAmerica} from '../../assets/north_america_wo_borders.svg';
import {ReactComponent as Eurasia} from '../../assets/eurasia_wo_borders.svg';

export default function International() {
    return (
        <div className="international">
            <div className="contentContainer">
                <h1 className="internationalTitle">
                    International
                </h1>
                <div className="mapContainer">
                    <div className="imgContainer">
                        <NorthAmerica className="northAmerica"/>
                        <Eurasia className="eurasia"/>
                    </div>
                </div>
                <div className="textContainer">
                    <ul>
                        <li>
                            <p className="description">2015 - DRC - Los Angeles</p>
                        </li>
                        <li>
                            <p className="description">2017 - MBZIRC - Abu Dhabi</p>
                        </li>
                        <li>
                            <p className="description">2019 - ICRA - Montreal</p>
                        </li>
                        <li>
                            <p className="description">2020 - MBZIRC - Abu Dhabi</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}