import React from "react";

import illuFront from "../../../assets/illu_front.svg"
import illuFind from "../../../assets/illu_find.svg"
import illuHow from "../../../assets/illu_how.svg"
import illuKontakt from "../../../assets/illu_kontakt.svg"
import illuSent from "../../../assets/illu_sent.svg"
import illuWho from "../../../assets/illu_who.svg"
import illuFaq from "../../../assets/illu_faq.svg"





import "./illustrations.scss"

export function IlluFront(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img_main">
          <img src={illuFront} alt="illustration OrderBuddy" />
        </figure>
    </div>
  );
}

export function IlluFind(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuFind} alt="illustration find os OrderBuddy" />
        </figure>
    </div>
  );
}
export function IlluHow(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuHow} alt="illustration sadan virker det OrderBuddy" />
        </figure>
    </div>
  );
}

export function IlluKontakt(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuKontakt} alt="illustration kontakt os OrderBuddy" />
        </figure>
    </div>
  );
}

export function IlluSent(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuSent} alt="illustration sent besked OrderBuddy" />
        </figure>
    </div>
  );
}

export function IlluWho(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuWho} alt="illustration om OrderBuddy" />
        </figure>
    </div>
  );
}

export function IlluFaq(props) {
  return (
    <div className="illu__container">
        <figure className="illu__img">
          <img src={illuFaq} alt="illustration FAQ OrderBuddy" />
        </figure>
    </div>
  );
}




