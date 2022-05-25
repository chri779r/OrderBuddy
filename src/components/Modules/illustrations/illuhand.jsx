import React from "react"
import styled from 'styled-components'



const ItemWrapper = styled.div`
display: flex;
background-image: url(./src/assets/hand.svg);
background-position: right;
background-size: 80vw 130vh;
width: 100vw;
height: 87vh;
    object-fit: cover;
    background-repeat: no-repeat;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

`
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
justify-content: flex-start;
height: fit-content;

`
const TextContainer = styled.div`
background-color: var(--darkGreen);
width:34vw;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;
text-align: left;
border-radius: 10px 10px 10px 0%;
`
const Text = styled.p`
 padding:0.5rem;

`




const IllustrationHand = () => {
    return(


        <ItemWrapper>
            <TextWrapper>

            <TextContainer>
                <Text>Nem bestilling og betaling</Text>
            </TextContainer>

            <TextContainer>
                <Text>Ingen oprettelse</Text>
            </TextContainer>

            <TextContainer>
                <Text>Miljøvenlig</Text>
            </TextContainer>

            </TextWrapper>
        </ItemWrapper>
 
 
    )
}

export default IllustrationHand