import React from "react"
import { IlluHow } from '../illustrations/illustrations'

import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroHow = () => {
    return(
<StyledHero>
<HeroIlluContainer>
    <IlluHow/>
</HeroIlluContainer>
    <HeroContainer>
    <h2>Sådan virker det</h2>
<p>Med OrderBuddy kan du nyde selskabet og bestille, når du er klar. Alt du skal er at gribe mobilen, skanne QR koden og blive inspireret.</p>
</HeroContainer>
</StyledHero>
          
    )
}

export default HeroHow