import React, {useState, useEffect} from "react";
import "./partners.scss"


  export default function Partners(){
    const [partners, setpartners] = useState([]);
    
    async function initpartners() {
        await fetch(`./assets/partner.json`, {mode:"cors", credentials:"include", headers:{"Content-Type":"application/json"}})
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setpartners(response);
            })
            .catch(err => console.error(err));
    }
        useEffect( () => {
            initpartners();
        }, [] ) 

        return (
            <>
            <section className="partner__wrapper">
                <h3>Vores partnere</h3>
                <div className="partner__container">
                {partners.map((partner, i) =>
                <div key={i} className="partner__card">
                    <img src={`./assets/${partner.name}.webp`} alt="partner logo" />
                </div>
                )}
                </div>
            </section>
            </>
        )
    }