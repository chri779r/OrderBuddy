import React from "react"

import './iconsmain.scss'

    import ikonKlok from "../../../assets/klok.svg"
    import ikonKort from "../../../assets/kort.svg"
    import ikonRabat from "../../../assets/rabat.svg"
    import ikonCo from "../../../assets/co2.svg"




const IconMain = () => {
    return(
   
        <div className="IconsWrapper" >
        <div className="IconsContainer" >
        <div className="Wrapper" >
        <div className="IconContainer" >
        <figure className="ikon__img">
            <img src={ikonKlok} alt="ikon klok OrderBuddy" />
          </figure>
        </div>
            <h3>Ingen ventetid</h3> 
            <p>Alle kender det, at tjeneren ikke har tid. Blikkene flakker forgæves for at få kontakt. Løsningen er OrderBuddy </p>
        </div>

        <div className="Wrapper" >
        <div className="IconContainer" >
        <figure className="ikon__img">
            <img src={ikonKort} alt="ikon kort OrderBuddy" />
          </figure>
        </div>
            <h3>Bestil lige når du ønsker</h3> 
            <p>Læn dig tilbage, nyd selskabet og bestil og betal når du er klar, køkkenet eller baren modtager din bestilling.</p>
        </div>

        <div className="Wrapper" >
        <div className="IconContainer" >
        <figure className="ikon__img">
            <img src={ikonRabat} alt="ikon rabat OrderBuddy" />
          </figure>
        </div>
            <h3>Kundeklubben</h3>           
            <p>Modtag automatisk rabat og stempelkort fra dine yndlingssteder direkte i app’en</p>
        </div>

        <div className="Wrapper" >
        <div className="IconContainer" >
        <figure className="ikon__img">
            <img src={ikonCo} alt="ikon CO2 OrderBuddy" />
          </figure>
        </div>
        <h3>Mindre CO2</h3>           
            <p>Med OrderBuddy får du kvitteringen digitalt og slipper for at skabe unøddigt prints, der alligevel ender i skraldespanden.</p>
        </div>
        </div>
        </div>
 
    )
}

export default IconMain


