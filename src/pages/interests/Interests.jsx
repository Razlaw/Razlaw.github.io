import "./interests.scss";

import {useInView} from "react-intersection-observer";

import {ReactComponent as FoosballIcon} from '../../assets/icons/foosball.svg';
import {ReactComponent as CameraIcon} from '../../assets/icons/camera.svg';
import {ReactComponent as MoviesIcon} from '../../assets/icons/movies.svg';
import {ReactComponent as JoystickIcon} from '../../assets/icons/joystick.svg';
import {ReactComponent as MusicIcon} from '../../assets/icons/note.svg';
import {ReactComponent as PsychologyIcon} from '../../assets/icons/psychologie.svg';
import {ReactComponent as DrawingIcon} from '../../assets/icons/drawing.svg';
import {ReactComponent as FoodIcon} from '../../assets/icons/food.svg';
import {ReactComponent as TravelIcon} from '../../assets/icons/travel.svg';

export default function Interests() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="interests">
            <div className="interestsContainer">
                <h1 className="interestsTitle">
                    Interessen
                </h1>
                <div className={"iconsContainer " + (inView && "inView")} ref={ref}>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <MusicIcon className="icon"/>
                            <h1 className="iconTitle">Musik</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <CameraIcon className="icon"/>
                            <h1 className="iconTitle">Fotographie</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <MoviesIcon className="icon"/>
                            <h1 className="iconTitle">Kino</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <DrawingIcon className="icon"/>
                            <h1 className="iconTitle">"Kunst"</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <PsychologyIcon className="icon"/>
                            <h1 className="iconTitle">Psychologie</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <JoystickIcon className="icon"/>
                            <h1 className="iconTitle">Spiele</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <FoosballIcon className="icon"/>
                            <h1 className="iconTitle">Kickern</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <FoodIcon className="icon"/>
                            <h1 className="iconTitle">Schlemmen</h1>
                        </div>
                    </div>
                    <div className="iconContainer">
                        <div className="hoverContainer">
                            <TravelIcon className="icon"/>
                            <h1 className="iconTitle">Reisen</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}