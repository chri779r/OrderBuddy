import React from "react"
import "./hero.scss"
import IlluFaq from "../../../assets/illu_faq.svg"
import FaqCard from '../cards/faqCard'

export function HowFaq(props){

    return(
        <section className="hero__wrapper">
            <div className="hero__container">
                <figure className="hero__figure">
                    <img src={ IlluFaq } alt="" className="hero__img" />
                </figure>
                <div className="hero__info">
                    <h2 className="hero__header">Har du spørgsmål?</h2>  
                    <p className="hero__text">Vi har samlet de mest stillede spørgsmål, vi får herunder i en FAQ</p>
                    <FaqCard/>
                </div>
            </div>
        </section>
    )
}