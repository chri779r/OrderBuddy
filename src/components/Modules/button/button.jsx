import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    height: 3em;
    width: auto;
    padding: 1em 2em;
    margin: 1em 0;
    font-family: "roboto", san-serif;
    font-size: 1em;
    background-color: var(--lilac);
    color: var(--white);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .5s ease;

    &:hover {
        background-color: var(--indigo);
        transform-origin: left;
        transform: scaleX(1);
    }
`;


export function Button() {

    return(
<<<<<<< HEAD
        <Btn/>
=======
        <Btn></Btn>
>>>>>>> main
    )
}