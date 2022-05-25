import React from 'react'
import { WhoHero } from '../heros2/heroAbout'
import { Button } from '../button/button'

export default function OmosPage(){
    return(
      <>
      <WhoHero/>
      <div className="card__holder">
        <Button><span>test knap</span></Button>
      </div>
      </>
    )
}
