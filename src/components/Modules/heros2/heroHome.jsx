import React from "react";
import "./hero.scss"
import illuFront from "../../../assets/illu_front.svg"

export function HeroHome(props){

    return(
        <section className="hero__wrapper">
            <div className="hero__container">
                <figure className="hero__figure">
                    <img src={ illuFront } alt="" className="hero__img" />
                </figure>
                <div className="hero__info">
                    <h1 className="hero__header">Nem og hurtig bestilling</h1>
                    <p className="hero__text">Med OrderBuddy behøver du ikke at vente for at bestille og betale. Nyd selskabet og bestil og betal når du er klar.</p>
                </div>
            </div>
        </section>
    )
}
