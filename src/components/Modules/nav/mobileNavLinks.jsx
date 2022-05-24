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
    </div>
    <div className="links__list--mobile">
      {isOpen && (
        <ul className="links__list">
           <li className="link__item"><NavLink to="/">Hjem</NavLink></li>
            <li className="link__item"><NavLink to="/hvordan">Hvordan</NavLink></li>
            <li className="link__item"><NavLink to="/find">Find os</NavLink></li>
            <li className="link__item"><NavLink to="/omos">Om os</NavLink></li>
            <li className="link__item"><NavLink to="/kontakt">Kontakt</NavLink></li>
        </ul>
      )}
    </div>
  </>
  );
}