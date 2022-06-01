import React from 'react'
import { WhoHero } from '../heros2/heroAbout'
import OmCard1 from '../cards/omCard1'
import OmCard2 from '../cards/omCard2'
import OmCard3 from '../cards/omCard3'
import styled from "styled-components";


const About__wrapper = styled.section`

&:nth-child(2) {
  background-color: #FCE4D5;
}

  @media (min-width: 1024px){
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content: center;
    align-items: start;
    padding: 2rem 0;

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
