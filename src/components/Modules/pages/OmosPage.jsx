import React from 'react'
import { WhoHero } from '../heros2/heroAbout'
import OmCard1 from '../cards/omCard1'
import OmCard2 from '../cards/omCard2'
import OmCard3 from '../cards/omCard3'

export default function OmosPage(){
    return(
      <>
      <WhoHero/>
        <OmCard1/>
        <OmCard2/>
        <OmCard3/>
      </>
    )
}
