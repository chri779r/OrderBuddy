import React from "react"

import './iconsmain.scss'

    import ikonKlok from "../../../assets/klok.svg"
    import ikonKort from "../../../assets/kort.svg"
    import ikonRabat from "../../../assets/rabat.svg"
    import ikonCo from "../../../assets/co2.svg"




const IconMain = () => {
    return(
    <>
        <section className="icon__wrapper">
            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                        <img src={ikonKlok} alt="ikon klok OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                    <h3>Ingen ventetid</h3> 
                    <p>Alle kender det, at tjeneren ikke har tid. Blikkene flakker forgæves for at få kontakt. Løsningen er OrderBuddy </p>
                </div>
            </div>
            
            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                        <img src={ikonKort} alt="ikon kort OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                    <h3>Mindre CO2</h3>
                    <p>Med OrderBuddy får du kvitteringen digitalt og slipper for at skabe unøddigt prints, der alligevel ender i skraldespanden.</p>
                </div>
            </div>

            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                        <img src={ikonRabat} alt="ikon rabat OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                    <h3>Kundeklubben</h3>           
                    <p>Modtag automatisk rabat og stempelkort fra dine yndlingssteder direkte i app’en</p>
                </div>
            </div>
            
            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                        <img src={ikonCo} alt="ikon CO2 OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                    <h3>Mindre CO2</h3>
                    <p>Med OrderBuddy får du kvitteringen digitalt og slipper for at skabe unøddigt prints, der alligevel ender i skraldespanden.</p>
                </div>
            </div>
        </section>
    </> 
    )
}

export default IconMain


