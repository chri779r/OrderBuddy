import React, { useState } from "react";
import { MenuToggle } from "./menuToggle";
import "./mobileNavLinks.scss"



export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    

    <div className="links__container">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className="links__list">
          <li className="link__item"><a href="#">Hjem</a></li>
          <li className="link__item"><a href="#">Hvordan</a></li>
          <li className="link__item"><a href="#">Find os</a></li>
          <li className="link__item"><a href="#">Om os</a></li>
          <li className="link__item"><a href="#">Kontakt</a></li>
        </ul>
      )}
    </div>
  );
}