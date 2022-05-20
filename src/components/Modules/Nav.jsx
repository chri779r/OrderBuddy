import "./Nav.scss"

export default function Navigation() {
    return (
        <>
        <div className="nav__container">
          <nav className="top__nav">
              <a href="" className="logo">OrderBuddy</a>
              <ul class="nav__list">
                  <li>
                    <a href="" class="nav__link">Hjem</a>
                  </li>
                  <li>
                    <a href="" class="nav__link">Hvordan det virker</a>
                  </li>
                  <li>
                    <a href="" class="nav__link">Find os her</a>
                  </li>
                  <li>
                    <a href="" class="nav__link">Om OrderBuddy</a>
                  </li>
                  <li>
                    <a href="" class="nav__link">Kontakt</a>
                  </li>
                </ul>
          </nav>
          <div className="burger">
              <div className="burger__line1"></div>    
              <div className="burger__line2"></div>    
          </div>
        </div> 
        </>
    )
  }