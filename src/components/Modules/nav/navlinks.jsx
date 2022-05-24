import React from "react";
import "./navLinks.scss"
import { NavLink } from 'react-router-dom'

export function NavLinks(props) {
  return (
    <div className="links__container">
        <ul className="links__list">
            <li className="link__item"><NavLink to="/">Hjem</NavLink></li>
            <li className="link__item"><NavLink to="/hvordan">Hvordan</NavLink></li>
            <li className="link__item"><NavLink to="/find">Find os</NavLink></li>
            <li className="link__item"><NavLink to="/omos">Om os</NavLink></li>
            <li className="link__item"><NavLink to="/kontakt">Kontakt</NavLink></li>
        </ul>
    </div>
  )
}