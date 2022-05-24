import React from "react"
import styled from 'styled-components'

import { IkonKlok } from '../icons/icons'
import { IkonKort } from '../icons/icons'
import { IkonRabat } from '../icons/icons'
import { IkonCo } from '../icons/icons'



const IconsContainer = styled.section`
display:flex;
justify-content: center;
align-items: center;
margin:5rem;
flex-direction: column;
gap:2rem;
`
const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:0.5rem;

`
const IconContainer = styled.div`
display:flex;
width:150px;
height:150px;
justify-content: center;
align-items: center;
background-color: var(--lilac);
border-radius:20px 20px 20px 0px;
`


const IconMain = () => {
    return(
   
        <IconsContainer >
        <Wrapper >
        <IconContainer >
            <IkonKlok/>  
        </IconContainer>
            <h3>Ingen ventetid</h3> 
            <p>Alle kender det, at tjeneren ikke har tid. Blikkene flakker forgæves for at få kontakt. Løsningen er OrderBuddy </p>
        </Wrapper>

        <Wrapper >
        <IconContainer >
            <IkonKort/>  
        </IconContainer>
            <h3>Bestil lige når du ønsker</h3> 
            <p>Læn dig tilbage, nyd selskabet og bestil og betal når du er klar, køkkenet eller baren modtager din bestilling.</p>
        </Wrapper>

        <Wrapper >
        <IconContainer >
            <IkonRabat/>  
        </IconContainer>
            <h3>Kundeklubben</h3>           
            <p>Modtag automatisk rabat og stempelkort fra dine yndlingssteder direkte i app’en</p>
        </Wrapper>

        <Wrapper >
        <IconContainer >
            <IkonCo/>  
        </IconContainer>
        <h3>Mindre CO2</h3>           
            <p>Med OrderBuddy får du kvitteringen digitalt og slipper for at skabe unøddigt prints, der alligevel ender i skraldespanden.</p>
        </Wrapper>
        </IconsContainer>
    )
}

export default IconMain