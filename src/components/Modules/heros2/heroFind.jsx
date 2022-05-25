import React from "react"
import "./hero.scss"
import IlluFind from "../../../assets/illu_find.svg"

export function FindHero(props){

    return(
        <div className="hero__container">
            <figure className="hero__figure">
                <img src={ IlluFind } alt="" className="hero__img" />
            </figure>
            <div className="hero__info">
                <h2 className="hero__header">Her finder du os</h2>
                <p className="hero__text">Hvis du er på udkig efter nye steder, hvor du kan bestille med OrderBuddy. Så har vi lavet et kort med caféer og restauranter nær dig.</p>
            </div>
        </div>
    )
}