import React from "react"
import "./form.scss"
import IlluSent from "../../../assets/illu_sent.svg"

export function Popup(props){

    return(
        <div className="popup__container">
            <figure className="popup__figure">
                <img src={ IlluSent } alt="" className="popup__img" />
            </figure>
            <div className="popup__info">
                <h2 className="popup__header">Tak for din besked!</h2>
                <p className="popup__text">Vi vender tilbage så snart som muligt</p>
            </div>
        </div>
    )
}