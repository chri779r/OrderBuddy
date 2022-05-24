import React from "react";
import "./navLinks.scss"
import { NavLink } from 'react-router-dom'

export function NavLinks(props) {
  return (
    <div className="links__container">
        <ul className="links__list">
            <li className="link__item"><NavLink to="/" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Hjem</NavLink></li>
            <li className="link__item"><NavLink to="/hvordan" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Hvordan</NavLink></li>
            <li className="link__item"><NavLink to="/find-os" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Find os</NavLink></li>
            <li className="link__item"><NavLink to="/om-os" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Om os</NavLink></li>
            <li className="link__item"><NavLink to="/kontakt" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Kontakt</NavLink></li>
        </ul>
    </div>
  )
}