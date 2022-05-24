import React from "react";
import logo from "../../../assets/logo.svg"
import "./logo.scss"
import { NavLink } from 'react-router-dom'

export function Logo(props) {
  return (
    <div className="logo__container">

        <figure className="logo__img">
        <NavLink to="/">
          <img src={logo} alt="OrderBuddy logo" />
          </NavLink>
        </figure>
    </div>
  );
}