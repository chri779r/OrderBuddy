import React from "react";

import facebook from "../../../assets/facebook.svg"
 import instagram from "../../../assets/instagram.svg"
  import linkedin from "../../../assets/linkedin.svg"


  import ikonKlok from "../../../assets/klok.svg"
  import ikonKort from "../../../assets/kort.svg"
  import ikonRabat from "../../../assets/rabat.svg"
  import ikonCo from "../../../assets/co2.svg"
  
  import ikonQr from "../../../assets/qr.svg"
  import ikonKortHow from "../../../assets/korthow.svg"
  import ikonEye from "../../../assets/eye.svg"

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

// ikoner til main page noter i->K<-on i className
export function IkonKlok(props) {
  return (
    <div className="ikon__container">
        <figure className="ikon__img">
          <img src={ikonKlok} alt="ikon klok OrderBuddy" />
        </figure>
    </div>
  );
}

export function IkonKort(props) {
  return (
    <div className="ikon__container">
        <figure className="ikon__img">
          <img src={ikonKort} alt="ikon kort OrderBuddy" />
        </figure>
    </div>
  );
}

export function IkonRabat(props) {
  return (
    <div className="ikon__container">
        <figure className="ikon__img">
          <img src={ikonRabat} alt="ikon rabat OrderBuddy" />
        </figure>
    </div>
  );
}

export function IkonCo(props) {
  return (
    <div className="ikon__container">
        <figure className="ikon__img">
          <img src={ikonCo} alt="ikon CO2 OrderBuddy" />
        </figure>
    </div>
  );
}

// ikoner til hvordan page noter i->K<-on i className
export function IkonQr(props) {
  return (
    <div className="ikon_how_container">
        <figure className="ikon_how_img">
          <img src={ikonQr} alt="ikon Qr OrderBuddy" />
        </figure>
    </div>
  );
}

export function IkonKortHow(props) {
  return (
    <div className="ikon_how_container">
        <figure className="ikon_how_img">
          <img src={ikonKortHow} alt="ikon kort hvordan OrderBuddy" />
        </figure>
    </div>
  );
}

export function IkonEye(props) {
  return (
    <div className="ikon_how_container">
        <figure className="ikon_how_img">
          <img src={ikonEye} alt="ikon se OrderBuddy" />
        </figure>
    </div>
  );
}