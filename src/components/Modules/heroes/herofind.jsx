import React from "react"
import { IlluFind } from '../illustrations/illustrations'

import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroFind = () => {
    return(
<StyledHero>
<HeroIlluContainer>
    <IlluFind/>
</HeroIlluContainer>
    <HeroContainer>
    <h2>Her finder du os</h2>
    <p>Hvis du er på udkig efter nye steder, hvor du kan bestille med OrderBuddy. Så har vi lavet et kort med caféer og restauranter nær dig. </p>
</HeroContainer>
</StyledHero>
          
    )
}

export default HeroFind