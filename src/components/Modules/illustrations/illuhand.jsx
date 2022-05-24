import React from "react"
import styled from 'styled-components'

import { IlluHand } from '../illustrations/illustrations'

const ItemWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: flex-end;
align-items: center;
align-content: center;
flex-direction: row-reverse;

`
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
 align-items: center;

`
const TextContainer = styled.div`
width: 30vw;
height: 9vh;
background-color: var(--darkGreen);
display: flex;
align-items: center;
text-align: left;
border-radius: 10% 10% 10% 0%;
`

const IlluWrapper = styled.div`
// margin-top: -20vh;

`

const IllustrationHand = () => {
    return(

    <ItemWrapper>
           <IlluWrapper>
    <IlluHand/>
    </IlluWrapper>
    <TextWrapper>
    <TextContainer>
        <p>Nem bestilling og betaling</p>
    </TextContainer>

    <TextContainer>
<p>Ingen oprettelse</p>
    </TextContainer>

    <TextContainer>
<p>Miljøvenlig</p>
    </TextContainer>
    </TextWrapper>

 
    </ItemWrapper>
 
    )
}

export default IllustrationHand