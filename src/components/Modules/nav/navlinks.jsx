import React from "react";
import "./navLinks.scss";
import { Link, useLocation } from 'react-router-dom';

export function NavLinks(props) {
  const location = useLocation();
  console.log(location);
    return (
    <div className="links__container">
        <ul className="links__list">
            <li className="link__item"><Link to="/" className={location.pathname==="/"?"active":""}>Hjem</Link></li>
            <li className="link__item"><Link to="/hvordan" className={location.pathname==="/hvordan"?"active":""}>Hvordan</Link></li>
            <li className="link__item"><Link to="/find" className={location.pathname==="/find"?"active":""}>Find os</Link></li>
            <li className="link__item"><Link to="/omos" className={location.pathname==="/omos"?"active":""}>Om os</Link></li>
            <li className="link__item"><Link to="/kontakt" className={location.pathname==="/kontakt"?"active":""}>Kontakt</Link></li>
        </ul>
    </div>
  )
}