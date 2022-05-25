import React from "react"
import { IlluFront } from '../illustrations/illustrations'
import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroMain = () => {
    return(
        <StyledHero>
            <HeroIlluContainer>
                <IlluFront/>
            </HeroIlluContainer>
            <HeroContainer>
                <h1>Nem og hurtig bestilling</h1>
                <p>Med OrderBuddy behøver du ikke at vente for at bestille og betale. Nyd selskabet og bestil og betal når du er klar. </p>
            </HeroContainer>
        </StyledHero>
          
    )
}

export default HeroMain

