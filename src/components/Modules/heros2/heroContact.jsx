import React from "react"
import "./hero.scss"
import IlluContact from "../../../assets/illu_kontakt.svg"

export function ContactHero(props){

    return(
        <section className="hero__wrapper">
            <div className="hero__container">
                <figure className="hero__figure">
                    <img src={ IlluContact } alt="" className="hero__img" />
                </figure>
                <div className="hero__info">
                    <h2 className="hero__header">Kontakt os</h2>
                    <p className="hero__text">Tag endelig fat i os</p>
                </div>
            </div>
        </section>
    )
}