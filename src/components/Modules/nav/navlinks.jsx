import React from "react";
import "./navLinks.scss";
import { Link } from 'react-router-dom';

export function NavLinks(props) {
  return (
    <div className="links__container">
        <ul className="links__list">
            <li className="link__item"><Link to="/">Hjem</Link></li>
            <li className="link__item"><Link to="/hvordan">Hvordan</Link></li>
            <li className="link__item"><Link to="/find-os">Find os</Link></li>
            <li className="link__item"><Link to="/om-os">Om os</Link></li>
            <li className="link__item"><Link to="/kontakt">Kontakt</Link></li>
        </ul>
    </div>
  )
}