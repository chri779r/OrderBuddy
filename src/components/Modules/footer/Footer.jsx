import "./Footer.scss"


import { NavLink } from 'react-router-dom'
import { Logo } from "../logo/logo"
import facebook from "../../../assets/facebook.svg"
import instagram from "../../../assets/instagram.svg"
import linkedin from "../../../assets/linkedin.svg"

export default function Footer() {
    return (
   <section className="footer">
       <div className="footer_container">
       <div className="vigtige_links">
           <h4>Vigtige links</h4>
    <ul className="footer_link_container">
         <li className="footer_link_item"><NavLink to="/omos">Om os</NavLink></li>
         <li className="footer_link_item"><NavLink to="/find">Find os</NavLink></li>
         <li className="footer_link_item"><NavLink to="/hvordan/:faq">FAQ</NavLink></li>
         <li className="footer_link_item"><NavLink to="/kontakt">Kontakt</NavLink></li>
     </ul>
       </div>
       <div className="kontakt">
           <h4>Kontakt</h4>
           <p>OrderBuddy ApS <br />
            Vinkelager 3, st. th.<br />
           2720 Vanløse</p>
           <p>info@orderbuddy.dk</p>
           <p>+45 22121242</p>
       </div>
       </div>
       <div className="some_links">
       <Logo />
       <div className="icon_footer">
       <div className="icon__container">
        <figure className="icon__img">
          <img src={facebook} alt="facebook logo" />
        </figure>
    </div>
    <div className="icon__container">
        <figure className="icon__img">
          <img src={instagram} alt="instagram logo" />
        </figure>
    </div>
    <div className="icon__container">
        <figure className="icon__img">
          <img src={linkedin} alt="linkedin logo" />
        </figure>
    </div>
       </div>
       </div>
   </section>
    )
  }