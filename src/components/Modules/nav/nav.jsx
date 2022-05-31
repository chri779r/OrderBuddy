import React from "react";
import "./nav.scss"
import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo/logo"
import { NavLinks } from "./NavLinks";
import { DeviceSize } from "../DeviceSize";
import { MobileNavLinks } from "./MobileNavLinks";


export function Navigation(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  return (
    <section className="topNav__container">
        <div className="logo">
            <Logo />
        </div>
        <div className="navigation__container">
            {!isMobile && <NavLinks /> || isMobile && <MobileNavLinks/>}
        </div>
    </section>  
  );
}
