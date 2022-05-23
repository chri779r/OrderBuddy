import React from "react";

export function NavLinks(props) {
  return (
    <div className="links__container">
        <ul className="link__list">
            <li className="link__item"><a href="#">Hjem</a></li>
            <li className="link__item"><a href="#">Hvordan</a></li>
            <li className="link__item"><a href="#">Find os</a></li>
            <li className="link__item"><a href="#">Om os</a></li>
            <li className="link__item"><a href="#">Kontakt</a></li>
        </ul>
    </div>
  )
}