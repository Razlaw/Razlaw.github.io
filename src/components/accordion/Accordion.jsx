import "./accordion.scss";

import React, {useEffect} from "react";

import AccordionItem from "../accordionItem/AccordionItem";

export default function Accordion({ data, openID }) {
    console.log("openID in accordion ", openID);
    console.log("data.length ", data.length);

    useEffect(() => {
        if(openID >= 0 && openID < data.length) {
            const elementID = "#accordionItem" + openID;
            const section = document.querySelector(elementID);
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }
    }, [openID, data]);

    return (
        <div className="wrapper">
            <ul className="accordionList">
                {data.map((data, key) => {
                    return (
                        <li className="accordionListItem" id={"accordionItem" + key} key={key}>
                            <AccordionItem
                                title={ (key + 1) + " - " + data.title}
                                paragraphs={data.paragraphs}
                                isOpened={key === openID}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}