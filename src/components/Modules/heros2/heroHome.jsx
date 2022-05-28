import React from "react";
import "./hero.scss"
import illuFront from "../../../assets/illu_front.svg"

export function HeroHome(props){

    return(
        <section className="hero_home_wrapper">
            <div className="hero_home_container">
                <figure className="hero_home_figure">
                    <img src={ illuFront } alt="" className="hero_home_img" />
                </figure>
                <div className="hero_home_info">
                    <h1 className="hero_home_header">Nem og hurtig bestilling</h1>
                    <p className="hero_home_text">Med OrderBuddy behøver du ikke at vente for at bestille og betale. Nyd selskabet og bestil og betal når du er klar.</p>
                </div>
            </div>
        </section>
    )
}
