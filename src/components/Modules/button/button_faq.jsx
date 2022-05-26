import React,{Component} from "react";
import styled from "styled-components";


const BtnFaq = styled.button`
    height: fit-content;
    width: fit-content;
 
    // margin: 1em 0;
    background-color: var(--lilac);
    border-radius: 5px 5px 5px 0px;
    border: none;

    transform-origin: right;
    transition: transform .5s ease;
   
    &:hover {
        background-color: var(--indigo);
        transform-origin: left;
        transform: scaleX(1);
        cursor:pointer;
    }
`;
const Pile = styled.div`
background-image: url(./src/assets/pile.svg);
background-position: center;
width: 1.4rem;
height: 1.8rem;
margin: 0.5rem 0.8rem;
background-size: cover;
// transition: transform .5s ease;
&:hover{
    transform-origin: center;
    transform: rotate(180deg);
}

`;
const QuestionWrapper = styled.div`
display: flex;
flex-direction: row;
align-items:center;
text-align: left;
gap:2rem;

`


export default class Toggle extends Component {
    state = {
      on: false,
    }


    toggle = () => {
        this.setState({
            on: !this.state.on
        });
}

 render() {
        return (
            <div>
            <QuestionWrapper>
  
        <BtnFaq onClick={this.toggle}>
             <Pile></Pile> 
        </BtnFaq>  
        <h4>Spørgsmål?</h4>
      </QuestionWrapper>
        {this.state.on && this.props.children}
        </div>
        )
        
    }
}
