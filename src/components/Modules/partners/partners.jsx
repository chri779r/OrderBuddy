import React, {useState, useEffect} from "react";
import "./partners.scss"


  export default function Partners(){
    const [partners, setpartners] = useState([]);
    
    async function initpartners() {
        await fetch(`/src/assets/partner.json`, {mode:"cors", credentials:"include", headers:{"Content-Type":"application/json"}})
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
            {partners.map((partner, i) =>
            <div key={i}>
                <h3>{partner.name}</h3>
                <h1>{partner.type}</h1>
                <img src={`/src/assets/${partner.name}.png`} alt="partner logo" />
            </div>
        )}
            </>
        )
    }


// export default function FetchData(){
//     loadJSON(`https://https://cwmunch.dk/kea/eksamen/partner.json`);
//     const Partner = {
//         name: "",
//         imageDir: "",
//     }

//     async function loadJSON(url, callback) {
//         const JSONData = await fetch(url);
//         const partners = await JSONData.json()

//         callback(partners);
//         prepPartners(JSONData);
//     } 

//     function prepPartners(JSONData) {
//         allPartners = JSONData.map(prepEachPartner);    
//     }

//     function prepEachPartner(jsonObject) {
//         const partner = Object.create(Partner);

//         const name = jsonObject.name;

//         partner.imageDir = `../../../assets/`${partner.name}.png`;
//     }


//     return(
//         <>
        
//         </>
//     )
// }