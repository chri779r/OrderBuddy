import React, { useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { NavLink } from 'react-router-dom';
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
          <li className="link__item"><NavLink to="/" onClick={()=>setOpen(false)}>Hjem</NavLink></li>
          <li className="link__item"><NavLink to="/hvordan" onClick={()=>setOpen(false)}>Hvordan</NavLink></li>
          <li className="link__item"><NavLink to="/find" onClick={()=>setOpen(false)}>Find os</NavLink></li>
          <li className="link__item"><NavLink to="/omos" onClick={()=>setOpen(false)}>Om os</NavLink></li>
          <li className="link__item"><NavLink to="/kontakt" onClick={()=>setOpen(false)}>Kontakt</NavLink></li>
        </ul>
      )}
    </div>
    </div>
    
  </>
  );
}