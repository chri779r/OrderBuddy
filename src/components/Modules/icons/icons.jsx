import React from "react";

import facebook from "../../../assets/facebook.svg"
 import instagram from "../../../assets/instagram.svg"
  import linkedin from "../../../assets/linkedin.svg"
import "./icons.scss"

export function Facebook(props) {
  return (
    <div className="icon__container">
        <figure className="icon__img">
          <img src={facebook} alt="facebook logo" />
        </figure>
    </div>
  );
}
export function Instagram(props) {
  return (
    <div className="icon__container">
        <figure className="icon__img">
          <img src={instagram} alt="instagram logo" />
        </figure>
    </div>
  );
}
export function Linkedin(props) {
  return (
    <div className="icon__container">
        <figure className="icon__img">
          <img src={linkedin} alt="linkedin logo" />
        </figure>
    </div>
  );
}