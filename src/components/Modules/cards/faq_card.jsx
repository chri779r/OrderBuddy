import React from "react"
import styled from 'styled-components'
import StyledHero from "../heroes/styledhero"

import Toggle from "../button/button_faq"

const Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 75%;
margin:1rem;
gap:1rem;
`


const AnswerWrapper = styled.div`
text-align: left;
display:flex;
padding-left:5rem;
`

function CardFaq() {
    return (
      <StyledHero>
        <h3>FAQ</h3>
      </StyledHero>
     
    )
   
}

export default CardFaq