import React from 'react'
import { WhoHero } from '../heros2/heroAbout'
import OmCard1 from '../cards/omCard1'
import OmCard2 from '../cards/omCard2'
import OmCard3 from '../cards/omCard3'
import styled from "styled-components";


const About__wrapper = styled.section`

  @media (min-width: 1024px){
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 1em 1em; 
    grid-template-areas: 
      "div1 div2"
      ". ."; 
      align-items: start;
      margin: auto;
  }
  .div1 { grid-area: div1; }
  .div2 { grid-area: div2; }
  max-width: 1200px;


    &:nth-child(2) {
      background-color: #fff;
  }
    }
`;


export default function OmosPage(){
    return(
      <>
      <WhoHero/>
      <About__wrapper>
        <OmCard1/>
        <OmCard2/>
      </About__wrapper>
      <OmCard3/>
      </>
    )
}
