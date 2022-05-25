import React from "react"
import styled from 'styled-components'


import { IkonQr } from '../icons/icons'
import { IkonEye } from '../icons/icons'
import { IkonKortHow } from '../icons/icons'



const IconsContainer = styled.section`
display:flex;
justify-content: center;
align-items: center;
margin:5rem;
flex-direction: column;
gap:2rem;
`

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:0.5rem;

`
const IconContainer = styled.div`
display:flex;
width:200px;
height:200px;
justify-content: center;
align-items: center;
`


const IconsHow = () => {
    return(
   
        <IconsContainer >
        <Wrapper >
        <IconContainer >
            <IkonQr/>  
        </IconContainer>
            <h3>Scan QR koden</h3> 
            <p>Scan QR koden på bordet, eller vælg hvor du er direkte i appen</p>
        </Wrapper>

        <Wrapper >
        <IconContainer >
            <IkonEye/>  
        </IconContainer>
            <h3>Se menuen</h3>
            <p>Find ud af hvad du ønsker at bestille og læg det i kurven</p>
        </Wrapper>


        <Wrapper >
        <IconContainer >
            <IkonKortHow/>  
        </IconContainer>
            <h3>Bestil og betal</h3>
            <p>Placer din ordre, og afvent. Når du er færdig med at spise og drikke, kan du bare forlade stedet.</p>
        </Wrapper>
        </IconsContainer>
    )
}

export default IconsHow