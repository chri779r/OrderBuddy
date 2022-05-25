import HeroWho from '../heroes/herowho'
import { Button } from '../button/button'

export default function OmosPage(){
    return(
      <>
      <HeroWho/>
      <div className="card__holder">
        <Button><span>test knap</span></Button>
      </div>
      </>
    )
}
