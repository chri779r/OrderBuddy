import React from "react"


import './illuhand.scss'

import Button from "../button/button";




const IllustrationHand = () => {
    return(



        <div className="ItemWrapper">
            <div className="BgIllu">
            </div>
            <div className="TextWrapper">

            <div className="TextContainer">
                <p className="Text">Nem bestilling og betaling</p>
                </div>

            <div className="TextContainer">
                <p className="Text">Ingen oprettelse</p>
                </div>

            <div className="TextContainer">
                <p className="Text">Miljøvenlig</p>
                </div>

            <Button text="Udforsk"></Button>

            </div>
            </div>
 
 
    )
}

export default IllustrationHand