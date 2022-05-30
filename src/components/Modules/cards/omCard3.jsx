import React from "react";
import "./cards.scss"
import Sonny from "../../../assets/sonny.jpg"

export default function OmCard3(props){

    return(
        <section className="card__wrapper" style={{display:"flex", flexWrap:"wrap", maxWidth: "1100px"}}>
            <img src={Sonny} alt="Sonny Meyer"/>
            <div className="card__container" >
                <h3 className="card__header" style={{color:"#26045D"}}>Hovedet bag OrderBuddy</h3>
                <p className="card__text" style={{color:"#26045D"}}>Vi har alle været ude i en spisesituation, hvor tjenerne har for travlt til at komme til dig, og det tager det sjove fra at være der med venner og familie. Hvad hvis du bare kunne bestille og betale, hygge dig med de mennesker, du er der med, og så vente på at blive serveret. Når du er færdig, kan du bestille flere, eller forlade stedet uden at få tjeneren en gang mere.</p>
                <p className="card__text" style={{color:"#26045D"}}>Idéen til OrderBuddy startede selvfølgelig, da jeg var ude at spise med nogle venner. Der var travlt på stedet, og vi ville faktisk bestille en ny omgang øl til bordet, men tjenerne havde for travlt andre steder, og da vi endelig fik fat i tjeneren besluttede vi bare at betale. Restauranten mistede omsætning og endte med kunder, der havde en dårlig oplevelse.</p>
                <p className="card__text" style={{color:"#26045D"}}>Jeg arbejder med procesoptimering, og jeg regnede med, at jeg kunne gøre dette meget bedre end det, der allerede var derude, så jeg besluttede at begynde at arbejde på OrderBuddy. OrderBuddy er en digital menuplatform, der hjælper spisesteder til et effektivt og hurtigt ordreflow uden at blive irriterede kunder.</p>
            </div>
        </section>
    )
}