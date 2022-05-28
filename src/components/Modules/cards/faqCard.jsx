import React from "react";
import "./cards.scss"
import ControlledAccordions from '../accordion/accordion'

export default function FaqCard() {

    return(
        <section className="card__container" style={{backgroundColor:"#fce4d5"}}>
            <ControlledAccordions/>
        </section>
    )
}