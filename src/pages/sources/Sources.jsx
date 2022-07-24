import "./sources.scss";

import React from "react";

import Logo from "../../components/logo/Logo";

export default function Sources() {
    return (
        <div className="sourcesContainer">
            <Logo/>
            <div className="contentContainer">
                <h1>Quellen</h1>
                <p id="thanks">Größten Dank an alle, die anderen ihre Arbeit frei verfügbar machen.</p>
                <p>Insbesondere:</p>
                <ul>
                    <li>
                        <p>
                            <a
                                href="https://www.behance.net/rajputrajesh"
                                target="_blank"
                                rel="noreferrer"
                            >Rajesh Rajput </a>
                            für die Schriftart
                            <a
                                href="https://www.behance.net/gallery/87667103/Emberly-Free-Typeface-54-Styles/modules/513862577"
                                target="_blank"
                                rel="noreferrer"
                            ><i> Emberly v1.3 </i></a>
                            -
                            <a
                                href="http://scripts.sil.org/OFL"
                                target="_blank"
                                rel="noreferrer"
                            > SIL Open Font License Version 1.1</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://unsplash.com/@jakobowens1"
                                target="_blank"
                                rel="noreferrer"
                            >Jakob Owens </a>
                            für sein Foto
                            <a
                                href="https://unsplash.com/photos/B86oI1o6cTM"
                                target="_blank"
                                rel="noreferrer"
                            ><i> Jake Wild </i></a>
                            -
                            <a
                                href="https://unsplash.com/license"
                                target="_blank"
                                rel="noreferrer"
                            > Unsplash Lizenz</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://pixabay.com/users/romanen-2521638/"
                                target="_blank"
                                rel="noreferrer"
                            >Evgen Rom </a>
                            für sein Foto
                            <a
                                href="https://pixabay.com/photos/ballerinas-dance-ballet-dancers-1376250/"
                                target="_blank"
                                rel="noreferrer"
                            ><i> Ballerinas Dance Ballet </i></a>
                            -
                            <a
                                href="https://pixabay.com/service/license/"
                                target="_blank"
                                rel="noreferrer"
                            > Pixabay Lizenz</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://unsplash.com/@richienolan"
                                target="_blank"
                                rel="noreferrer"
                            >Richie Nolan </a>
                            für sein Foto
                            <a
                                href="https://unsplash.com/photos/bsm3a-HYqbE"
                                target="_blank"
                                rel="noreferrer"
                            ><i> Friends on a quiet beach </i></a>
                            -
                            <a
                                href="https://unsplash.com/license"
                                target="_blank"
                                rel="noreferrer"
                            > Unsplash Lizenz</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://unsplash.com/@martenbjork"
                                target="_blank"
                                rel="noreferrer"
                            >Marten Bjork </a>
                            für sein titelloses Foto
                            <a
                                href="https://unsplash.com/photos/FVtG38Cjc_k"
                                target="_blank"
                                rel="noreferrer"
                            ><i> eines Smartphones im Flugzeug </i></a>
                            -
                            <a
                                href="https://unsplash.com/license"
                                target="_blank"
                                rel="noreferrer"
                            > Unsplash Lizenz</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                href="https://simplemaps.com/"
                                target="_blank"
                                rel="noreferrer"
                            >Simplemaps </a>
                            für ihre
                            <a
                                href="https://simplemaps.com/resources/svg-world"
                                target="_blank"
                                rel="noreferrer"
                            ><i> Weltkarte </i></a>
                            -
                            <a
                                href="https://simplemaps.com/resources/svg-license"
                                target="_blank"
                                rel="noreferrer"
                            > Lizenz</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}