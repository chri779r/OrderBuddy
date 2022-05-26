import React from "react"
import styled from 'styled-components'

import StyledHero from "../heroes/styledhero"

import Toggle from "../button/button_faq"

const Wrapper = styled.div`
display:flex;
flex-direction: column;
width: 80vw;
margin:1rem;
gap:1rem;
`


const AnswerWrapper = styled.div`
text-align: left;
display:flex;
padding-left:5rem;
`

function CardFaq() {



    return (
   
        <StyledHero>

      <h3>FAQ</h3>
      <Wrapper>

             <Toggle >
    
                 <AnswerWrapper>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus tempore ad sapiente? Delectus voluptatem libero rerum a voluptate vero sit assumenda facilis ab quo consectetur nam impedit, debitis modi soluta.</p>
      </AnswerWrapper>
                 </Toggle>
            
                 <Toggle>
           
           <AnswerWrapper>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus tempore ad sapiente? Delectus voluptatem libero rerum a voluptate vero sit assumenda facilis ab quo consectetur nam impedit, debitis modi soluta.</p>
</AnswerWrapper>
           </Toggle>
      </Wrapper>

      </StyledHero>
     
    )
   
}

export default CardFaq