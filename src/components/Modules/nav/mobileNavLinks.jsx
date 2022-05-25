import React, { useState } from "react";
import { MenuToggle } from "./menuToggle";
import { Link } from 'react-router-dom';
import "./mobileNavLinks.scss";

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
  <>
    <div className="links__container">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <div className="links__list--mobile">
      {isOpen && (
        <ul className="links__list">
          <li className="link__item"><Link to="/">Hjem</Link></li>
          <li className="link__item"><Link to="/hvordan">Hvordan</Link></li>
          <li className="link__item"><Link to="/find-os">Find os</Link></li>
          <li className="link__item"><Link to="/om-os">Om os</Link></li>
          <li className="link__item"><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      )}
    </div>
    </div>
    
  </>
  );
}