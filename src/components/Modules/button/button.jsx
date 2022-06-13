import React from "react";
import "./button.scss"


export default function Button({text}) {

    return(
        <button className="btn">{text}</button>
    )
}