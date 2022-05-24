import React, { useState } from "react";
import { MenuToggle } from "./menuToggle";
import { NavLink } from 'react-router-dom'
import "./mobileNavLinks.scss"

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
  <>
    <div className="links__container">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <div className="links__list--mobile">
      {isOpen && (
        <ul className="links__list">
           <li className="link__item"><NavLink to="/" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Hjem</NavLink></li>
            <li className="link__item"><NavLink to="/hvordan" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Hvordan</NavLink></li>
            <li className="link__item"><NavLink to="/find-os" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Find os</NavLink></li>
            <li className="link__item"><NavLink to="/om-os" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Om os</NavLink></li>
            <li className="link__item"><NavLink to="/kontakt" className={({ isActive }) => (isActive ? "active__link" : "inactive__link")}>Kontakt</NavLink></li>
        </ul>
      )}
    </div>
    </div>
    
  </>
  );
}