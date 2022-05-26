import React from "react";
import "./cards.scss"
import { Button } from "../button/button";

export default function HjemCard(){

    return(
        <>
            <h3 className="card__header">Hvem er OrderBuddy?</h3>
            <p className="card__text">OrderBuddy tilbyder en webløsning hvor gæsterne kan selv hente menuen og bestille og betale når det passer dem. OrderBuddy fokuserer på at lave bestillingsprocessen hurtig og smertefri uden nogen former for mellemled og oprettelse. Derudover sætter OrderBuddy pris på god kundeoplevelse, miljøet og hygiejne. </p>
            <Button>Om Os</Button>
        </>
    )
}