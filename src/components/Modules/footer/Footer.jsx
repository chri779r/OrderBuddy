import "./Footer.scss"
import { Logo } from "../logo/logo"
import { Facebook } from "../icons/icons"
import { Instagram } from "../icons/icons"
import { Linkedin } from "../icons/icons"

export default function Footer() {
    return (
   <section className="footer">
       <div className="footer_container">
       <div className="vigtige_links">
           <h4>Vigtige links</h4>
    <ul className="footer_link_container">
         <li className="footer_link_item"><a href="#">Om OrderBuddy</a></li>
         <li className="footer_link_item"><a href="#">Find os her</a></li>
         <li className="footer_link_item"><a href="#">FAQ</a></li>
         <li className="footer_link_item"><a href="#">Kontakt OrderBuddy</a></li>
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
       <Facebook />
        <Instagram />
       <Linkedin /> 
       </div>
       </div>
   </section>
    )
  }