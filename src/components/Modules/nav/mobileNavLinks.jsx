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
          <li className="link__item"><Link to="/" onClick={()=>setOpen(false)}>Hjem</Link></li>
          <li className="link__item"><Link to="/hvordan" onClick={()=>setOpen(false)}>Hvordan</Link></li>
          <li className="link__item"><Link to="/find" onClick={()=>setOpen(false)}>Find os</Link></li>
          <li className="link__item"><Link to="/omos" onClick={()=>setOpen(false)}>Om os</Link></li>
          <li className="link__item"><Link to="/kontakt" onClick={()=>setOpen(false)}>Kontakt</Link></li>
        </ul>
      )}
    </div>
    </div>
    
  </>
  );
}