import React from "react";
import "./cards.scss"

export default function OmCard1(props){

    return(
        <section className="card__wrapper">
            <div className="card__container">
                <h3 className="card__header" style={{color:"#26045D"}}>Så let som muligt</h3>
                <p className="card__text text1" style={{color:"#26045D"}}>Orderbuddy tror på at jo mere tid, der er til personlig betjening giver bedre oplevelser og gladere gæster på restaurationer. OrderBuddys system er fokuseret på brugerrejsen og at gøre det så let som muligt for gæsterne at lave deres bestilling. OrderBuddy tilbyder en webløsning til restaurationer, så de kan bruge mere tid på at give personlig betjening og derved forbedre hele kundeoplevelsen for deres gæster. Derudover giver de restaurationer mulighed for at bruge mindre papir ved at gøre deres ordre og kvitteringer digitale, samt fjerner behovet for printet menukort.</p>
            </div>
        </section>
    )
}