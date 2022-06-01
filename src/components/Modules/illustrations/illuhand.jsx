import React from "react"
import { NavLink } from 'react-router-dom'
import Hand from "../../../../public/hand.svg"

import './illuhand.scss'

import Button from "../button/button";




const IllustrationHand = () => {
    return(
        <>
        <div className="ItemWrapper">
            <div className="BgIllu">
                <img src={Hand} alt="hånd holder mobil" />
                <NavLink to="/hvordan"><Button text="Udforsk"></Button></NavLink>
                {/* <div className="TextWrapper">
                    
                    <div className="TextContainer">
                        <p className="Text">Nem bestilling og betaling</p>
                    </div>

                    <div className="TextContainer">
                        <p className="Text">Ingen oprettelse</p>
                    </div>

                    <div className="TextContainer">
                        <p className="Text">Miljøvenlig</p>
                    </div>

                    
                </div> */}
            </div>
        </div>
        </>
 
    )
}

export default IllustrationHand