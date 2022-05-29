import { HowHero } from '../heros2/heroHow'
import { HowFaq } from '../heros2/heroFaq'

import IconsHow from '../icons/iconshow'
import FaqCard from '../cards/faqCard'

function HvordanPage(){
    return(
      <>
        <HowHero/>
        <IconsHow/>
        <section id="faq">
        < HowFaq/>
        <FaqCard/>
        </section>
        </>

    )
}

export default HvordanPage