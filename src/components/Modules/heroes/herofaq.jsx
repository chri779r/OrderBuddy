import React from "react"
import { IlluFaq } from '../illustrations/illustrations'
import StyledHero from "./styledhero"
import HeroIlluContainer from "./styledilluCont" 
import HeroContainer from "./styledCont"

const HeroFaq = () => {
    return(
        <StyledHero>
            <HeroIlluContainer>
                <IlluFaq/>
            </HeroIlluContainer>
            <HeroContainer>
                <h2>Har du spørgsmål?</h2>  
                <p>Vi har samlet de mest stillede spørgsmål, vi får herunder i en FAQ</p>
            </HeroContainer>
        </StyledHero>
          
    )
}

export default HeroFaq