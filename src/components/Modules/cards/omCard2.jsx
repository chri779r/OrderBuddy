import React from "react";
import "./cards.scss"

export default function OmCard2(props){

    return(
        <section className="card__wrapper">
            <div className="card__container">
                <h3 className="card__header" style={{color:"#26045D"}}>Webapp frem for en app</h3>
                <p className="card__text" style={{color:"#26045D"}}>Ved at lave en webapp frem for en app, der først skal downloades, oprette en bruger og så komme til bestillingen, kan gæsterne i OrderBuddys system komme hurtigt og smertefrit frem til bestillingen uden nogen former for mellemled og oprettelse.</p>
            </div>
        </section>
    )
}