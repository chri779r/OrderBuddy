import React from "react"
import "./hero.scss"
import IlluHow from "../../../assets/illu_how.svg"

export function HowHero(props){

    return(
        <div className="hero__container">
            <figure className="hero__figure">
                <img src={ IlluHow } alt="" className="hero__img" />
            </figure>
            <div className="hero__info">
                <h2 className="hero__header">Sådan virker det</h2>
                <p className="hero__text">Med OrderBuddy kan du nyde selskabet og bestille, når du er klar. Alt du skal er at gribe mobilen, skanne QR koden og blive inspireret.</p>
            </div>
        </div>
    )
}