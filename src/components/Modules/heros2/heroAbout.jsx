import React from "react"
import "./hero.scss"
import IlluWho from "../../../assets/illu_who.svg"

export function WhoHero(props){

    return(
        <section className="hero__wrapper">
            <div className="hero__container">
                <figure className="hero__figure">
                    <img src={ IlluWho } alt="" className="hero__img" />
                </figure>
                <div className="hero__info">
                    <h2 className="hero__header">Om OrderBuddy</h2>
                    <p className="hero__text">Her finder du information omkring virksomheden og dens ejer</p>
                </div>
            </div>
        </section>
    )
}