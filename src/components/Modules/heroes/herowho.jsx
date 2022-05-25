import React from "react"
import { IlluWho } from '../illustrations/illustrations'

import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroWho = () => {
    return(
        <StyledHero>
            <HeroIlluContainer>
                <IlluWho/>
            </HeroIlluContainer>
            <HeroContainer>
                <h2>Om OrderBuddy</h2>
                <p>Her finder du information omkring virksomheden og dens ejer</p>
            </HeroContainer>
        </StyledHero>
          
    )
}

export default HeroWho