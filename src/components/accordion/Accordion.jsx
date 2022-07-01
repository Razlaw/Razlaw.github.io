import "./accordion.scss";

import React, {useEffect} from "react";

import AccordionItem from "../accordionItem/AccordionItem";

export default function Accordion({ data, openID }) {

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
                {data.slice(0).reverse().map((data_element, key) => {
                    return (
                        <li className="accordionListItem" id={"accordionItem" + key} key={key}>
                            <AccordionItem
                                title={ (data.length - key) + " - " + data_element.title}
                                paragraphs={data_element.paragraphs}
                                links={data_element.links}
                                isOpened={key === openID}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}