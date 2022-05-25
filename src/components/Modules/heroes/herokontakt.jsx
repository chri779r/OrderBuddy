import React from "react"
import { IlluKontakt } from '../illustrations/illustrations'

import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroKontakt = () => {
    return(
        <StyledHero>
            <HeroIlluContainer>
                <IlluKontakt/>
            </HeroIlluContainer>
            <HeroContainer>
                <h2>Kontakt os</h2>
                <p>Tag endelig fat i os</p>
            </HeroContainer>
        </StyledHero>
          
    )
}

export default HeroKontakt