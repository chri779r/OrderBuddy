import React from "react"
import './iconshow.scss'
import ikonQr from "../../../assets/qr.svg"
import ikonKortHow from "../../../assets/korthow.svg"
import ikonEye from "../../../assets/eye.svg"

const IconsHow = () => {
    return(
<>
<section className="how__icon__wrapper">
            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                      <img src={ikonQr} alt="ikon Qr OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                  <h3>Scan QR koden</h3> 
                  <p>Scan QR koden på bordet, eller vælg hvor du er direkte i appen</p>
                </div>
            </div>

            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                      <img src={ikonEye} alt="ikon se OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                  <h3>Se menuen</h3>
                  <p>Find ud af hvad du ønsker at bestille og læg det i kurven</p>
                </div>
            </div>
            
            <div className="icon__container">
                <div className="icon__img">
                    <figure>
                      <img src={ikonKortHow} alt="ikon kort hvordan OrderBuddy" />
                    </figure>
                </div>
                <div className="icon__info">
                  <h3>Bestil og betal</h3>
                  <p>Placer din ordre, og afvent. Når du er færdig med at spise og drikke, kan du bare forlade stedet.</p>
                </div>
            </div>
        </section>
    </> 
    )
}

export default IconsHow