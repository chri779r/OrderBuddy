import React from "react";
import logo from "../../../assets/logo.svg"
import "./logo.scss"

export function Logo(props) {
  return (
    <div className="logo__container">
        <figure className="logo__img">
        <img src={logo} alt="OrderBuddy logo" />
        </figure>
    </div>
  );
}